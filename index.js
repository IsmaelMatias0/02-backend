import express from "express";
import cors from "cors"; 
import sequelize from "./db.js";
import Usuario from "./models/usuario.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta para registrar usuario
app.post("/api/usuarios", async (req, res) => {
  try {
    const { gmail, contrasena } = req.body;
    if (!gmail || !contrasena) {
      return res.status(400).json({ message: "Todos los campos son obligatorios" });
    }

    const nuevoUsuario = await Usuario.create({ gmail, contrasena });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al registrar usuario" });
  }
});

// Conexión a la base de datos y arranque del servidor
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexión a PostgreSQL exitosa");

    await sequelize.sync(); // crea la tabla si no existe
    console.log("Tablas sincronizadas");

    app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
  } catch (err) {
    console.error("Error al iniciar el servidor:", err);
  }
})();
