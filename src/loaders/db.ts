import mongoose from "mongoose";
import { databaseConifg } from "../config/database.config";

export default async () => {
  const result = await mongoose.connect(databaseConifg.connectionUrl, {
    useNewUrlParser: true,
  });
  return result.connection.db;
};
