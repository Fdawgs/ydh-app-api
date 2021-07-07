const Fastify = require("fastify");
const plugin = require(".");
const getConfig = require("../../../config");

describe("Options Route", () => {
	describe("GET Requests", () => {
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

		test("Should return preference options", async () => {
			const mockQueryFn = jest.fn().mockResolvedValue({
				recordsets: [
					[
						{
							preferenceTypeId: 1,
							preferenceTypeDisplay: "SMS",
						},
					],
					[
						{
							preferenceTypeId: 1,
							preferenceTypeDisplay: "SMS",
							preferenceOptionDisplay: "yes",
							preferenceOptionValue: 1,
						},
						{
							preferenceTypeId: 1,
							preferenceTypeDisplay: "SMS",
							preferenceOptionDisplay: "no",
							preferenceOptionValue: 2,
						},
					],
				],
			});

			server.db = {
				query: mockQueryFn,
			};

			const response = await server.inject({
				method: "GET",
				url: "/",
			});

			expect(mockQueryFn).toHaveBeenCalledTimes(1);
			expect(response.statusCode).toEqual(200);
		});

		test("Should return HTTP status code 404 if no values returned from database", async () => {
			const mockQueryFn = jest.fn().mockResolvedValue({
				recordsets: [[], []],
			});

			server.db = {
				query: mockQueryFn,
			};

			const response = await server.inject({
				method: "GET",
				url: "/",
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
				method: "GET",
				url: "/",
			});

			expect(mockQueryFn).toHaveBeenCalledTimes(1);
			expect(response.statusCode).toEqual(500);
		});
	});
});
