const fp = require("fastify-plugin");

const { Pool } = require("pg");
const mssql = require("mssql");

/**
 * @author Frazer Smith
 * @description Decorator plugin that adds Microsoft SQL Server client.
 * @param {Function} server - Fastify instance.
 * @param {object} options - Fastify config values.
 * @param {('mssql'|'pgsql')} options.client - Database client.
 * @param {string} options.connection - Database connection string.
 * Example connection string: `mssql://username:password@localhost/database`.
 */
async function plugin(server, options) {
	switch (options.client.toLowerCase()) {
		case "mssql":
		default:
			await mssql.connect(options.connection);

			server.decorate("db", mssql);
			server.addHook("onClose", async (instance, done) =>
				mssql.close(done)
			);
			break;
		case "postgresql":
			// eslint-disable-next-line no-case-declarations
			const pool = new Pool({
				connectionString: options.connection,
			});

			server.decorate("db", pool);
			server.addHook("onClose", async (instance, done) => pool.end(done));

			break;
	}
}

module.exports = fp(plugin);
