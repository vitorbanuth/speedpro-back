import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Turbos = sequelize.define("Turbos", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING(1024),
  },
  inStock: {
    type: DataTypes.BOOLEAN,
  },

  Type: {
    type: DataTypes.STRING,
  },

  Application: {
    type: DataTypes.STRING,
  },

  MaxPower: {
    type: DataTypes.STRING,
  },

  price: {
    type: DataTypes.DECIMAL(7,2),
  },

  
});
await Turbos.sync();
