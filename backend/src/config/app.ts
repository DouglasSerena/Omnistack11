import * as express from "express";
import * as cors from "cors";
import {
  OngRoutes,
  IncidentRoutes,
  ProfileRoutes,
  SessionRoutes,
} from "../routes/routes";
import { errors } from "celebrate";

class App {
  public express: express.Application;

  constructor() {
    this.express = express();

    this.middleware();
    this.routes();
    this.express.use(errors());
  }

  middleware() {
    this.express.use(express.json());
    // cors
    this.express.use(cors()); // { origin: "*", methods: "GET,PORT,DELETE", }
  }

  routes() {
    this.express.use(OngRoutes);
    this.express.use(IncidentRoutes);
    this.express.use(ProfileRoutes);
    this.express.use(SessionRoutes);
  }
}

export default new App().express;
