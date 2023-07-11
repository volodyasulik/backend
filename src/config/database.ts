/* eslint-disable no-console */

import { DataSource } from "typeorm";

function getSSLConfig(env: string) {
  const configs: { [key: string]: boolean | { [key: string]: boolean } } = {
    production: { rejectUnauthorized: true },
    local: false,
    deploy: { rejectUnauthorized: false },
  };
  if (!configs[env] === undefined) {
    throw new Error("Set network in your .env file");
  }
  return configs[env];
}

const AppDataSource = new DataSource({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  logging: ["query", "error"],
  type: "postgres",

  migrations: ["dist/migrations/**/*.{ts,js}"],
  subscribers: ["src/subscriber/**/*.ts"],
  database: process.env.POSTGRES_DB,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  // ssl: getSSLConfig(process.env.SERVER_MODE as string),
  synchronize: true,
});

export default AppDataSource;
