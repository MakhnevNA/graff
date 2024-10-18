import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const pool = new Pool({
    user: process.env.SUPABASE_USER,
    password: process.env.SUPABASE_PASSWORD,
    host: process.env.SUPABASE_HOST,
    port: parseInt(process.env.SUPABASE_PORT!),
    database: process.env.SUPABASE_DB_NAME
});

export default pool;
