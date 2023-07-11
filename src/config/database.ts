/* eslint-disable no-console */

import { Todo } from "../entities/Todo";
import { DataSource, DataSourceOptions } from "typeorm";

const connectDB = async () => {
  const options: DataSourceOptions = {
    host: process.env.POSTGRES_HOST,
    port: Number(process.env.POSTGRES_PORT),
    logging: ["query", "error"],
    type: "postgres",
    entities: [Todo],
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    synchronize: true,
  };
  const dataSource = new DataSource(options);

  dataSource
    .initialize()
    .then(() => {
      console.log("Connection success!");
    })
    .catch((err) => {
      console.error(err.message);

      process.exit(1);
    });
};

export default connectDB;
