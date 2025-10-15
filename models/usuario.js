import { DataTypes } from "sequelize";
import sequelize from "../db.js";

const Usuario = sequelize.define("Usuario", {
  gmail: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: "usuarios",
  timestamps: false
});

export default Usuario;
