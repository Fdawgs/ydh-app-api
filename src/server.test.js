const faker = require("faker/locale/en_GB");
const Fastify = require("fastify");
const startServer = require("./server");
const getConfig = require("./config");

const mockPage = faker.datatype.number({
	min: 1,
	max: 10,
});

const mockLastModified = faker.date.past().toISOString().split("T")[0];

// TODO: look at standing up test SQL Server instance with Docker and disable skip for this
describe.skip("Server deployment", () => {
	let config;
	let server;

	beforeAll(async () => {
		config = await getConfig();

		server = Fastify();
		server.register(startServer, config);

		await server.ready();
	});

	afterAll(async () => {
		await server.close();
	});

	test("Should return documents from register", async () => {
		server.db = {
			query: jest.fn(),
		};

		const response = await server.inject({
			method: "GET",
			url: "/documents/register",
			headers: {
				accept: "*/*",
				authorization: "Bearer testtoken",
			},
			query: {
				lastModified: mockLastModified,
				perPage: mockPage,
				page: mockPage,
			},
		});

		expect(JSON.parse(response.payload)).toEqual({
			data: [],
			meta: {
				pagination: {
					total: 0,
					per_page: mockPage,
					current_page: mockPage,
					total_pages: 0,
				},
			},
		});
		expect(response.statusCode).toEqual(200);
	});

	test("Should return HTTP status code 406 if content-type in `Accept` request header unsupported", async () => {
		server.db = {
			query: jest.fn(),
		};

		const response = await server.inject({
			method: "GET",
			url: "/documents/register",
			headers: {
				accept: "application/javascript",
				authorization: "Bearer testtoken",
			},
			query: {
				lastModified: mockLastModified,
				perPage: mockPage,
				page: mockPage,
			},
		});

		expect(response.statusCode).toEqual(406);
	});
});
