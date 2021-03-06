const { NotAcceptable } = require("http-errors");

const { healthcheckGetSchema } = require("./schema");

/**
 * @author Frazer Smith
 * @description Sets routing options for server for healthcheck endpoint.
 * This is used by monitoring software to poll and confirm the API is running,
 * so needs no authentication.
 * @param {Function} server - Fastify instance.
 */
async function route(server) {
	server.addHook("onRequest", async (req, res) => {
		if (
			// Catch unsupported Accept header media types
			!healthcheckGetSchema.produces.includes(
				req.accepts().type(healthcheckGetSchema.produces)
			)
		) {
			res.send(NotAcceptable());
		}
	});

	server.route({
		method: "GET",
		url: "/healthcheck",
		schema: healthcheckGetSchema,
		async handler(req, res) {
			res.send("ok");
		},
	});
}

module.exports = route;
