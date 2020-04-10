import { Pool, PoolConfig } from "pg"

let _pgPool: Pool
export function pgPool(): Pool {
    return _pgPool || (_pgPool = setupPgPool())
}

function setupPgPool(): Pool {
    if (!process.env.DB_HOST || !process.env.DB_PORT || !process.env.DB_USER || !process.env.DB_PASSWORD || !process.env.DB_NAME) {
        console.error('Missing db environment variables.', process.env)
        process.exit(1)
    }

    const port = parseInt(process.env.DB_PORT)

    const config: PoolConfig = {
        max: 1,
        host: process.env.DB_HOST,
        port,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }

    return new Pool(config)
}
