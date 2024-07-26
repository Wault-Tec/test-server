import 'dotenv/config'

export default {
    port: process.env.PORT,
    db: {
        client: process.env.DB_CLIENT,
        database: process.env.DB_DATABASE,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
		port: process.env.DB_PORT,
    }
}