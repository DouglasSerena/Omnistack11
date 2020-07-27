import * as request from "supertest";
import connection from "./../../src/database/connection";
import app from "./../../src/config/app";

describe("ONG", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new ONG", async () => {
    const response = await request(app).post("/ongs").send({
      name: "douglas",
      email: "douglas111serenal@awdawdwa.com",
      whatsapp: "12345678911",
      city: "Capão da canoa",
      uf: "Rd",
    });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
