const createError = require("http-errors");

// Import plugins
const cors = require("fastify-cors");

// Import utils
const clean = require("../../../utils/clean-objects");

const { optionsGetSchema } = require("./schema");
const { optionsSelect } = require("./query");

/**
 * @author Frazer Smith
 * @description Sets routing options for server.
 * @param {Function} server - Fastify instance.
 * @param {object} options - Object containing route config objects.
 */
async function route(server, options) {
	// Use CORS: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
	server.register(cors, {
		...options.cors,
		methods: ["GET"],
		hideOptionsRoute: true,
	});

	server.route({
		method: "GET",
		url: "/",
		schema: optionsGetSchema,
		async handler(req, res) {
			try {
				const results = await server.db.query(
					optionsSelect({
						patientPreferencesTypeTable:
							options.database.tables.patientPrefTypeLookup,
						patientPreferencesValueTable:
							options.database.tables.patientPrefValueLookup,
					})
				);

				let preferenceTypeOptions;
				let preferenceValueOptions;

				switch (options.database.client) {
					case "mssql":
					default:
						preferenceTypeOptions = results.recordsets[0];
						preferenceValueOptions = results.recordsets[1];
						break;
					case "postgresql":
						preferenceTypeOptions = results[0].rows;
						preferenceValueOptions = results[1].rows;
						break;
				}

				if (
					preferenceTypeOptions &&
					preferenceTypeOptions.length !== 0
				) {
					// Build patient object
					const patientObj = {
						preferences: [],
					};

					let priorityCount = 0;

					// Build preference objects, merging in results from preferenceValueOptions query
					preferenceTypeOptions.forEach((preferenceType) => {
						const preferenceObj = {
							type: {
								display: preferenceType.preferenceTypeDisplay,
								id: preferenceType.preferenceTypeId,
								priority: priorityCount,
								selected: 2,
								options: [],
							},
						};

						// Build option objects to populate options array
						if (
							preferenceValueOptions &&
							preferenceValueOptions.length !== 0
						) {
							preferenceValueOptions.forEach(
								(preferenceValue) => {
									if (
										preferenceValue.preferenceTypeId ===
										preferenceType.preferenceTypeId
									) {
										const optionObj = {
											display:
												preferenceValue.preferenceOptionDisplay,
											value: preferenceValue.preferenceOptionValue,
										};

										preferenceObj.type.options.push(
											optionObj
										);
									}
								}
							);

							patientObj.preferences.push(preferenceObj);
						}

						priorityCount += 1;
					});

					res.send(clean(patientObj));
				} else {
					res.send(
						createError(404, "Invalid or expired search results")
					);
				}
			} catch (err) {
				server.log.error(err);
				res.send(
					createError(500, "Unable to return result(s) from database")
				);
			}
		},
	});
}

module.exports = route;
