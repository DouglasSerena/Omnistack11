import { Response, Request } from "express";
import connection from "./../database/connection";

const SessionController = {
  async index(req: Request, res: Response) {
    const { id } = req.body;

    const ong = await connection("ongs").where("id", id).select("name").first();
    console.log(id, ong);

    if (!ong) {
      return res.status(400).json({ error: "No ONG found with this ID" });
    }

    return res.status(200).json(ong);
  },
};

export default SessionController;
