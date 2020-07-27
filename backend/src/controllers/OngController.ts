import { Response, Request } from "express";
import connection from "./../database/connection";
import generateUniqueId from "../utils/generateUniqueId";

const OngController = {
  async index(req: Request, res: Response) {
    const ongs = await connection("ongs").select("*");
    return res.status(200).json(ongs);
  },
  async create(req: Request, res: Response) {
    const { name, email, whatsapp, city, uf } = req.body;

    const id = generateUniqueId();

    await connection("ongs").insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return res.status(201).json({ id });
  },
};

export default OngController;
