import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";

export const Faq = sequelize.define(
  "Faq",
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
  }
);
await Faq.sync();
