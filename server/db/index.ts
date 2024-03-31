import { createPool } from 'mysql2/promise';
import { drizzle } from 'drizzle-orm/mysql2';

interface Options {
  query: string;
  values?: any[];
}

const pool = createPool({
  connectionLimit: 100,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'production',
  debug: false
});

export const sql = async ({ query, values }: Options) => {
  const [rows] = await pool.query(query, values);
  return rows;
};


export const db = drizzle(pool);
