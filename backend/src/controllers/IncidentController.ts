import { Response, Request, response } from "express";
import connection from "./../database/connection";

const IncidentController = {
  async index(req: Request, res: Response) {
    const { page = 1 } = req.query;

    const [count] = await connection("incidents").count();

    const incidents = await connection("incidents")
      .join("ongs", "ongs.id", "=", "incidents.ong_id")
      .limit(5)
      .offset((Number(page) - 1) * 5)
      .select([
        "incidents.*",
        "ongs.name",
        "ongs.email",
        "ongs.whatsapp",
        "ongs.city",
        "ongs.uf",
      ]);

    res.header("X-Total-Count", count["count(*)"]);

    return res.status(200).json(incidents);
  },
  async create(req: Request, res: Response) {
    const { title, description, value } = req.body;
    const ong_id = req.headers.authorization;

    const [id] = await connection("incidents").insert({
      title,
      description,
      value,
      ong_id,
    });

    return res.status(201).json({ id });
  },
  async delete(req: Request, res: Response) {
    const { id } = req.params;
    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("id", id)
      .select("ong_id", "title")
      .first();

    if (incident["ong_id"] !== ong_id) {
      return res.status(401).json({ error: "Operation not permitted." });
    }

    await connection("incidents").where("id", id).delete();

    return res.status(204).send();
  },
};

export default IncidentController;
