const autoLoad = require("fastify-autoload");
const fastifyPlugin = require("fastify-plugin");
const path = require("path");

// Import plugins
const bearer = require("fastify-bearer-auth");
const cors = require("fastify-cors");
const helmet = require("fastify-helmet");
const swagger = require("fastify-swagger");
const mssql = require("./plugins/fastify-mssql");

/**
 * @author Frazer Smith
 * @description Build Fastify instance
 * @param {Function} server - Fastify instance.
 * @param {object} config - Fastify configuration values
 */
async function plugin(server, config) {
	// Enable plugins
	server
		// Use CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
		.register(cors, config.cors)

		.register(swagger, config.swagger)

		// Use Helmet to set response security headers: https://helmetjs.github.io/
		.register(helmet, (instance) => ({
			contentSecurityPolicy: {
				directives: {
					defaultSrc: ["'self'"], // default source is mandatory
					baseUri: ["'self'"],
					blockAllMixedContent: [],
					frameAncestors: ["'self'"],
					fontSrc: ["'self'"],
					formAction: ["'self'"],
					imgSrc: ["'self'", "data:", "validator.swagger.io"],
					objectSrc: ["'none'"],
					scriptSrc: ["'self'"].concat(instance.swaggerCSP.script),
					styleSrc: ["'self'", "https:"].concat(
						instance.swaggerCSP.style
					),
					upgradeInsecureRequests: [],
				},
			},
		}))

		/**
		 * Encapsulate bearer token auth and routes into child server, so that swagger
		 * route doesn't inherit bearer token auth plugin
		 */
		.register(async (childServer) => {
			childServer
				.register(bearer, { keys: config.authKeys })
				.register(mssql, config.database.connection)
				// Import and register service routes
				.register(autoLoad, {
					dir: path.join(__dirname, "routes"),
					options: config,
				});
		});
}

module.exports = fastifyPlugin(plugin);
