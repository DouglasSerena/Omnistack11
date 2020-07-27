import { Router } from "express";
import { IncidentController } from "../controllers";
import { celebrate, Segments, Joi } from "celebrate";

const routes = Router();

routes.get(
  "/incidents",
  celebrate({
    [Segments.QUERY]: Joi.object().keys({
      page: Joi.number(),
    }),
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  IncidentController.index
);
routes.post("/incidents", IncidentController.create);
routes.delete(
  "/incidents/:id",
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required(),
    }),
  }),
  IncidentController.delete
);

export default routes;
