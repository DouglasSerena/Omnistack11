import { Router } from "express";
import { IncidentController } from "../controllers";

const routes = Router();

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.create);
routes.delete("/incidents/:id", IncidentController.delete);

export default routes;
