export default ({ env }) => ({
	connection: {
		client: 'mysql',
		connection: {
		host: env('DATABASE_HOST', 'localhost'),
			port: env.int('DATABASE_PORT', 3306),
			database: env('DATABASE_NAME', 'strapi'),
			user: env('DATABASE_USERNAME', 'root'),
			password: env('DATABASE_PASSWORD', 'pUjO7h2EFSLT40qm'),
			ssl: env.bool('DATABASE_SSL', false)
		}
	}
});
