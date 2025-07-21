import 'dotenv/config';
import mysql from 'mysql2/promise';

const isProduction = process.env.NODE_ENV === 'production';
let pool;

const getPool = async () => {
  try {
    if (!pool) {
      const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

      const connectionOptions = {
        connectionLimit: 10,
        host: DB_HOST || 'localhost',
        port: DB_PORT || 3306,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        timezone: 'Z',
        // Configuración SSL para TiDB Cloud en producción
        ssl: isProduction ? { rejectUnauthorized: true } : false
      };

      // Si no estamos en producción, creamos la base de datos si no existe
      if (!isProduction) {
        const poolTemp = mysql.createPool({
          host: DB_HOST || 'localhost',
          port: DB_PORT || 3306,
          user: DB_USER,
          password: DB_PASSWORD,
        });
        await poolTemp.query(`CREATE DATABASE IF NOT EXISTS ${DB_NAME}`);
        await poolTemp.end(); // Cerrar conexión temporal
      }

      pool = mysql.createPool(connectionOptions);
    }
    return pool;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error); // Usar console.error para errores
    throw error;
  }
};

export default getPool;