const autoLoad = require("fastify-autoload");
const fp = require("fastify-plugin");
const { NotAcceptable } = require("http-errors");
const path = require("path");

// Import plugins
const accepts = require("fastify-accepts");
const bearer = require("fastify-bearer-auth");
const compress = require("fastify-compress");
const disableCache = require("fastify-disablecache");
const flocOff = require("fastify-floc-off");
const helmet = require("fastify-helmet");
const rateLimit = require("fastify-rate-limit");
const swagger = require("fastify-swagger");
const underPressure = require("under-pressure");
const mssql = require("./plugins/mssql");

// Import healthcheck route
const healthCheck = require("./routes/healthcheck");

/**
 * @author Frazer Smith
 * @description Build Fastify instance
 * @param {Function} server - Fastify instance.
 * @param {object} config - Fastify configuration values
 */
async function plugin(server, config) {
	// Register plugins
	server
		// Accept header handler
		.register(accepts)

		// Support Content-Encoding
		.register(compress, { inflateIfDeflated: true })

		// Set response headers to disable client-side caching
		.register(disableCache)

		// Opt-out of Google's FLoC advertising-surveillance network
		.register(flocOff)

		// Use Helmet to set response security headers: https://helmetjs.github.io/
		.register(helmet, {
			contentSecurityPolicy: {
				directives: {
					"default-src": ["'self'"],
					"base-uri": ["'self'"],
					"img-src": ["'self'", "data:"],
					"object-src": ["'none'"],
					"child-src": ["'self'"],
					"frame-ancestors": ["'none'"],
					"form-action": ["'self'"],
					"upgrade-insecure-requests": [],
					"block-all-mixed-content": [],
				},
			},
			hsts: {
				maxAge: 31536000,
			},
		})

		// Rate limiting and 429 response handling
		.register(rateLimit, config.rateLimit)

		// Process load and 503 response handling
		.register(underPressure, config.processLoad)

		// Enable Swagger/OpenAPI routes
		.register(swagger, config.swagger)

		// Basic healthcheck route to ping
		.register(healthCheck)

		/**
		 * Encapsulate plugins and routes into secured child context, so that swagger and healthcheck
		 * routes do not inherit `accepts` preHandler or bearer token auth plugin.
		 * See https://www.fastify.io/docs/latest/Encapsulation/ for more info
		 */
		.register(async (securedContext) => {
			securedContext
				// Catch unsupported Accept header media types
				.addHook("preHandler", async (req, res) => {
					if (
						!["application/json"].includes(
							req.accepts().type(["application/json"])
						)
					) {
						res.send(NotAcceptable());
					}
				})
				.register(bearer, { keys: config.authKeys })
				.register(mssql, config)
				// Import and register service routes
				.register(autoLoad, {
					dir: path.join(__dirname, "routes"),
					ignorePattern: /healthcheck/,
					options: config,
				});
		});
}

module.exports = fp(plugin, { fastify: "3.x", name: "server" });
