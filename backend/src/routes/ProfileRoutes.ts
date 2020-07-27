import { Router } from "express";
import { ProfileController } from "../controllers";
import { celebrate, Segments, Joi } from "celebrate";

const routes = Router();

routes.get(
  "/profile",
  celebrate({
    [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required(),
    }).unknown(),
  }),
  ProfileController.index
);

export default routes;
