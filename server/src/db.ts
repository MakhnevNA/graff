import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT ? parseInt( process.env.PG_PORT) : 3001,
    database: process.env.PG_DB_NAME,
});

export default pool;
