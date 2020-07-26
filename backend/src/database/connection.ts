import knex from "knex";
import configuration from "./../../knexfile";

const connection = knex(configuration);

export default connection;
