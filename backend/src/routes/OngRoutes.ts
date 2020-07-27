import { Router } from "express";
import { OngController } from "../controllers";
import { celebrate, Segments, Joi } from "celebrate";

const routes = Router();

routes.get("/ongs", OngController.index);
routes.post(
  "/ongs",
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(13),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
    }),
  }),
  OngController.create
);

export default routes;
