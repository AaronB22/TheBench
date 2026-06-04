import mysql2 from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } = process.env;

const pool = mysql2.createPool({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password : DB_PASSWORD,
    database: DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

export default pool;