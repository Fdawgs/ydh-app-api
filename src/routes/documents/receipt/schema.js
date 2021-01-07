const S = require("fluent-json-schema");

/**
 * Fastify uses AJV for JSON Schema Validation,
 * see https://www.fastify.io/docs/latest/Validation-and-Serialization/
 *
 * This validation protects against XSS and HPP attacks.
 */
const headerSchema = S.object().prop(
	"Authorization",
	S.string().description("Bearer token for authorization").required()
);

const receiptDeleteSchema = {
	description: "Delete document read receipt",
	headers: headerSchema,
	params: S.object().prop(
		"id",
		S.string()
			.description("Logical id of the artifact")
			.examples(["EXAMPLE-GUID"])
			.required()
	),
	querystring: S.object().prop(
		"patientId",
		S.number()
			.description("Unique patient identifier")
			.examples([9999999999])
			.required()
	),
	response: {
		204: S.null(),
		500: S.object()
			.prop("statusCode", S.number().const(500))
			.prop("error", S.string().const("Internal Server Error"))
			.prop(
				"message",
				S.string().const(
					"Unable to update delete read receipt from database"
				)
			),
	},
};

const receiptPutSchema = {
	description: "Create document read receipt",
	headers: headerSchema,
	params: S.object().prop(
		"id",
		S.string()
			.description("Logical id of the artifact")
			.examples(["EXAMPLE-GUID"])
			.required()
	),
	querystring: S.object()
		.prop(
			"patientId",
			S.number()
				.description("Unique patient identifier")
				.examples([9999999999])
				.required()
		)
		.prop(
			"timestamp",
			S.string()
				.description("Read time of document")
				.format("date-time")
				.required()
		),
	response: {
		204: S.null(),
		500: S.object()
			.prop("statusCode", S.number().const(500))
			.prop("error", S.string().const("Internal Server Error"))
			.prop(
				"message",
				S.string().const("Unable to update read receipt in database")
			),
	},
};

module.exports = { receiptDeleteSchema, receiptPutSchema };
