import { Response, Request } from "express";
import connection from "./../database/connection";
const ProfileController = {
  async index(req: Request, res: Response) {
    const ong_id = req.headers.authorization;

    const incident = await connection("incidents")
      .where("ong_id", ong_id)
      .select("*");

    return res.status(200).json(incident);
  },
};

export default ProfileController;
