/* eslint-disable security/detect-non-literal-fs-filename */
require("dotenv").config();

const envSchema = require("env-schema");
const S = require("fluent-json-schema");
const fsp = require("fs").promises;
const pino = require("pino");
const rotatingLogStream = require("file-stream-rotator");

const { name, description, license, version } = require("../../package.json");

/**
 * @author Frazer Smith
 * @description Convert string boolean to boolean
 * or comma-delimited string to array.
 * @param {string} param - CORS parameter.
 * @returns {boolean|Array|string} CORS parameter.
 */
function parseCorsParameter(param) {
	if (param.trim() === "true") {
		return true;
	}
	if (param.trim() === "false") {
		return false;
	}
	if (param.includes(",")) {
		const paramArray = [];
		param
			.trim()
			.split(",")
			.forEach((value) => {
				paramArray.push(value.trim());
			});

		return paramArray;
	}
	return param;
}

/**
 * @author Frazer Smith
 * @description Validate environment variables and build server config.
 * @returns {object} Server config.
 */
async function getConfig() {
	// Validate env variables
	const env = envSchema({
		dotenv: true,
		schema: S.object()
			.prop("NODE_ENV", S.string())
			.prop("SERVICE_HOST", S.string())
			.prop("SERVICE_PORT", S.number())
			.prop("HTTPS_PFX_PASSPHRASE", S.anyOf([S.string(), S.null()]))
			.prop("HTTPS_PFX_FILE_PATH", S.anyOf([S.string(), S.null()]))
			.prop("HTTPS_SSL_CERT_PATH", S.anyOf([S.string(), S.null()]))
			.prop("HTTPS_SSL_KEY_PATH", S.anyOf([S.string(), S.null()]))
			.prop("CORS_ORIGIN", S.anyOf([S.string(), S.null()]))
			.prop("CORS_ALLOWED_HEADERS", S.anyOf([S.string(), S.null()]))
			.prop(
				"CORS_ALLOW_CREDENTIALS",
				S.anyOf([S.string().enum(["true"]), S.null()])
			)
			.prop("CORS_EXPOSED_HEADERS", S.anyOf([S.string(), S.null()]))
			.prop(
				"PROC_LOAD_MAX_EVENT_LOOP_DELAY",
				S.anyOf([S.number(), S.null()]).default(0)
			)
			.prop(
				"PROC_LOAD_MAX_HEAP_USED_BYTES",
				S.anyOf([S.number(), S.null()]).default(0)
			)
			.prop(
				"PROC_LOAD_MAX_RSS_BYTES",
				S.anyOf([S.number(), S.null()]).default(0)
			)
			.prop(
				"PROC_LOAD_MAX_EVENT_LOOP_UTILIZATION",
				S.anyOf([S.number(), S.null()]).default(0)
			)
			.prop("RATE_LIMIT_EXCLUDED_ARRAY", S.anyOf([S.string(), S.null()]))
			.prop(
				"RATE_LIMIT_MAX_CONNECTIONS_PER_MIN",
				S.anyOf([S.number(), S.null()]).default(1000)
			)
			.prop(
				"LOG_LEVEL",
				S.anyOf([
					S.string().enum([
						"fatal",
						"error",
						"warn",
						"info",
						"debug",
						"trace",
						"silent",
					]),
					S.null(),
				]).default("info")
			)
			.prop("LOG_ROTATION_DATE_FORMAT", S.string().default("YYYY-MM-DD"))
			.prop("LOG_ROTATION_FILENAME", S.anyOf([S.string(), S.null()]))
			.prop(
				"LOG_ROTATION_FREQUENCY",
				S.string().enum(["custom", "daily", "test"]).default("daily")
			)
			.prop("LOG_ROTATION_MAX_LOGS", S.anyOf([S.string(), S.null()]))
			.prop("LOG_ROTATION_MAX_SIZE", S.anyOf([S.string(), S.null()]))
			.prop("AUTH_BEARER_TOKEN_ARRAY", S.anyOf([S.string(), S.null()]))
			.prop(
				"DB_CLIENT",
				S.anyOf([
					S.string().enum(["mssql", "postgresql"]).default("mssql"),
					S.null(),
				])
			)
			.prop("DB_CONNECTION_STRING", S.string())
			.prop("DB_DOCUMENT_REGISTER_TABLE", S.string())
			.prop("DB_PATIENT_PREFERENCES_TABLE", S.string())
			.prop("DB_PATIENT_PREFERENCES_TYPE_TABLE", S.string())
			.prop("DB_PATIENT_PREFERENCES_VALUE_TABLE", S.string())
			.prop("DB_READ_RECEIPT_DOCS_TABLE", S.string())
			.required([
				"NODE_ENV",
				"SERVICE_HOST",
				"SERVICE_PORT",
				"DB_CONNECTION_STRING",
				"DB_DOCUMENT_REGISTER_TABLE",
				"DB_PATIENT_PREFERENCES_TABLE",
				"DB_PATIENT_PREFERENCES_TYPE_TABLE",
				"DB_PATIENT_PREFERENCES_VALUE_TABLE",
				"DB_READ_RECEIPT_DOCS_TABLE",
			]),
	});

	const config = {
		fastify: {
			host: env.SERVICE_HOST,
			port: env.SERVICE_PORT,
		},
		fastifyInit: {
			/**
			 * See https://www.fastify.io/docs/v3.8.x/Logging/
			 * and https://getpino.io/#/docs/api for logger options
			 */
			logger: {
				formatters: {
					level(label) {
						return { level: label };
					},
				},
				level: env.LOG_LEVEL || "info",
				serializers: {
					req(req) {
						return pino.stdSerializers.req(req);
					},
					res(res) {
						return pino.stdSerializers.res(res);
					},
				},
				timestamp: () => pino.stdTimeFunctions.isoTime(),
			},
			ignoreTrailingSlash: true,
		},
		cors: {
			origin: parseCorsParameter(env.CORS_ORIGIN) || false,
		},
		processLoad: {
			maxEventLoopDelay: env.PROC_LOAD_MAX_EVENT_LOOP_DELAY || 0,
			maxHeapUsedBytes: env.PROC_LOAD_MAX_HEAP_USED_BYTES || 0,
			maxRssBytes: env.PROC_LOAD_MAX_RSS_BYTES || 0,
			maxEventLoopUtilization:
				env.PROC_LOAD_MAX_EVENT_LOOP_UTILIZATION || 0,
		},
		rateLimit: {
			max: env.RATE_LIMIT_MAX_CONNECTIONS_PER_MIN || 1000,
			timeWindow: 60000,
		},
		swagger: {
			routePrefix: "/docs",
			exposeRoute: true,
			staticCSP: true,
			openapi: {
				info: {
					title: name,
					description,
					contact: {
						name: "Solutions Development Team",
						email: "servicedesk@ydh.nhs.uk",
					},
					license: {
						name: license,
						url: "https://raw.githubusercontent.com/Fdawgs/ydh-myydh-crud-api/master/LICENSE",
					},
					version,
				},
				components: {
					securitySchemes: {
						bearerToken: {
							type: "apiKey",
							name: "Authorization",
							in: "header",
							bearerFormat: "bearer token",
						},
					},
				},
				tags: [
					{
						name: "Contact Preferences",
						description:
							"Endpoints relating to patient contact preferences",
					},
					{
						name: "Documents",
						description:
							"Endpoints relating to patient clinical documents",
					},
					{
						name: "System Administration",
						description: "",
					},
				],
			},
		},
		database: {
			client: env.DB_CLIENT || "mssql",
			connection: env.DB_CONNECTION_STRING,
			tables: {
				documentRegister: env.DB_DOCUMENT_REGISTER_TABLE,
				patientPref: env.DB_PATIENT_PREFERENCES_TABLE,
				patientPrefTypeLookup: env.DB_PATIENT_PREFERENCES_TYPE_TABLE,
				patientPrefValueLookup: env.DB_PATIENT_PREFERENCES_VALUE_TABLE,
				readReceipt: env.DB_READ_RECEIPT_DOCS_TABLE,
			},
		},
	};

	if (env.LOG_ROTATION_FILENAME) {
		// Rotation options: https://github.com/rogerc/file-stream-rotator/#options
		config.fastifyInit.logger.stream = rotatingLogStream.getStream({
			date_format: env.LOG_ROTATION_DATE_FORMAT || "YYYY-MM-DD",
			filename: env.LOG_ROTATION_FILENAME,
			frequency: env.LOG_ROTATION_FREQUENCY || "daily",
			max_logs: env.LOG_ROTATION_MAX_LOG,
			size: env.LOG_ROTATION_MAX_SIZE,
			verbose: false,
		});
	}

	/**
	 * Pretty output to stdout out if not in production.
	 * Replaces using `pino-pretty` in scripts, as it does not play
	 * well with Nodemon
	 */
	if (
		env.NODE_ENV.toLowerCase() !== "production" &&
		(!env.LOG_ROTATION_FILENAME || env.LOG_ROTATION_FILENAME === "")
	) {
		config.fastifyInit.logger.prettyPrint = true;
	}

	if (env.RATE_LIMIT_EXCLUDED_ARRAY) {
		config.rateLimit.allowList = JSON.parse(env.RATE_LIMIT_EXCLUDED_ARRAY);
	}

	if (env.AUTH_BEARER_TOKEN_ARRAY) {
		const keys = new Set();
		JSON.parse(env.AUTH_BEARER_TOKEN_ARRAY).forEach((element) => {
			keys.add(element.value);
		});
		config.authKeys = keys;
	}

	if (String(env.CORS_ALLOW_CREDENTIALS) === "true") {
		config.cors.credentials = true;
	}
	if (env.CORS_ALLOWED_HEADERS) {
		config.cors.allowedHeaders = env.CORS_ALLOWED_HEADERS;
	}
	if (env.CORS_EXPOSED_HEADERS) {
		config.cors.exposedHeaders = env.CORS_EXPOSED_HEADERS;
	}

	// Enable HTTPS using cert/key or passphrase/pfx combinations
	if (env.HTTPS_SSL_CERT_PATH && env.HTTPS_SSL_KEY_PATH) {
		try {
			config.fastifyInit.https = {
				cert: await fsp.readFile(env.HTTPS_SSL_CERT_PATH),
				key: await fsp.readFile(env.HTTPS_SSL_KEY_PATH),
			};
		} catch (err) {
			throw Error(
				`No such file or directory ${err.path} for SSL cert/key, falling back to HTTP`
			);
		}
	}

	if (env.HTTPS_PFX_PASSPHRASE && env.HTTPS_PFX_FILE_PATH) {
		try {
			config.fastifyInit.https = {
				passphrase: env.HTTPS_PFX_PASSPHRASE,
				pfx: await fsp.readFile(env.HTTPS_PFX_FILE_PATH),
			};
		} catch (err) {
			throw Error(
				`No such file or directory ${err.path} for PFX file, falling back to HTTP`
			);
		}
	}

	return config;
}

module.exports = getConfig;
