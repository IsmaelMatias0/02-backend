import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
const sequelize = new Sequelize(
  process.env.DB_NAME,     // nombre de la base de datos
  process.env.DB_USER,     // usuario
  process.env.DB_PASSWORD, // contraseña
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT, // 'postgres'
  }
);
export default sequelize;
