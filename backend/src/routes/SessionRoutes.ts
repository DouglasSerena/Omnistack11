import { Router } from "express";
import { SessionController } from "../controllers";

const routes = Router();

routes.post("/sessions", SessionController.index);

export default routes;
