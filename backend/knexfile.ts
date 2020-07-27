import * as path from "path";
import * as knex from "knex";

const database = {
  development: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "/src/database/db.sqlite"),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "/src/database/migrations"),
    },
  },
  test: {
    client: "sqlite3",
    connection: {
      filename: path.join(__dirname, "/src/database/test.sqlite"),
    },
    useNullAsDefault: true,
    migrations: {
      directory: path.join(__dirname, "/src/database/migrations"),
    },
  },
} as knex.Config;

export = database;
