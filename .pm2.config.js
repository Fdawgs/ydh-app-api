// PM2 ecosystem config
module.exports = {
	apps: [
		{
			cwd: __dirname,
			env: {
				NODE_ENV: "development",
			},
			env_production: {
				NODE_ENV: "production",
			},
			exec_mode: "cluster",
			instances: "max",
			name: "ydh-app-crud-api",
			script: "./src/app.js",
			watch: [".env"],
		},
	],
};
