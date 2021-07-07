const faker = require("faker/locale/en_GB");
const Fastify = require("fastify");
const plugin = require(".");
const getConfig = require("../../../config");

const mockId = faker.datatype.number({
	min: 1,
	max: 10,
});
const mockPatientId = faker.datatype.number({
	min: 1000000000,
	max: 9999999999,
});
const mockTimeStamp = faker.date.past().toISOString();

describe("Receipt Route", () => {
	describe("DELETE Requests", () => {
		let options;
		let server;

		beforeAll(async () => {
			options = await getConfig();

			server = Fastify();
			server.register(plugin, options);

			await server.ready();
		});

		afterAll(async () => {
			await server.close();
		});

		test("Should delete a document read receipt", async () => {
			const mockQueryFn = jest.fn().mockResolvedValue({
				rowsAffected: [1],
			});

			server.db = {
				query: mockQueryFn,
			};

			const response = await server.inject({
				method: "DELETE",
				url: `/${mockId}`,
				query: {
					patientId: mockPatientId,
				},
			});

			expect(mockQueryFn).toHaveBeenCalledTimes(1);
			expect(response.statusCode).toEqual(204);
		});

		test("Should return HTTP status code 404 if document missing or already deleted", async () => {
			const mockQueryFn = jest.fn().mockResolvedValue({
				rowsAffected: [0],
			});

			server.db = {
				query: mockQueryFn,
			};

			const response = await server.inject({
				method: "DELETE",
				url: `/${mockId}`,
				query: {
					patientId: mockPatientId,
				},
			});

			expect(mockQueryFn).toHaveBeenCalledTimes(1);
			expect(response.statusCode).toEqual(404);
		});

		test("Should return HTTP status code 500 if connection issue encountered", async () => {
			const mockQueryFn = jest
				.fn()
				.mockRejectedValue(Error("Failed to connect to DB"));

			server.db = {
				query: mockQueryFn,
			};

			const response = await server.inject({
				method: "DELETE",
				url: `/${mockId}`,
				query: {
					patientId: mockPatientId,
				},
			});

			expect(mockQueryFn).toHaveBeenCalledTimes(1);
			expect(response.statusCode).toEqual(500);
		});
	});

	describe("PUT Requests", () => {
		let options;
		let server;

		beforeAll(async () => {
			options = await getConfig();

			server = Fastify();
			server.register(plugin, options);

			await server.ready();
		});

		afterAll(async () => {
			await server.close();
		});

		test("Should upsert document read receipt", async () => {
			const mockQueryFn = jest.fn().mockResolvedValue({
				rowsAffected: [1],
			});

			server.db = {
				query: mockQueryFn,
			};

			const response = await server.inject({
				method: "PUT",
				url: `/${mockId}`,
				query: {
					patientId: mockPatientId,
					timestamp: mockTimeStamp,
				},
			});

			expect(mockQueryFn).toHaveBeenCalledTimes(1);
			expect(response.statusCode).toEqual(204);
		});

		test("Should return HTTP status code 500 if connection issue encountered", async () => {
			const mockQueryFn = jest.fn().mockResolvedValue({
				rowsAffected: [0],
			});

			server.db = {
				query: mockQueryFn,
			};

			const response = await server.inject({
				method: "PUT",
				url: `/${mockId}`,
				query: {
					patientId: mockPatientId,
					timestamp: mockTimeStamp,
				},
			});

			expect(mockQueryFn).toHaveBeenCalledTimes(1);
			expect(response.statusCode).toEqual(500);
		});
	});
});
