import express from "express";
import sequelize from "./db.js";
const app = express();
const PORT = process.env.PORT || 3000;app.use(express.json());
sequelize.authenticate()
  .then(() => console.log("Conexión a PostgreSQL en Railway exitosa"))
  .catch(err => console.error("Error al conectar con la BD:", err));
