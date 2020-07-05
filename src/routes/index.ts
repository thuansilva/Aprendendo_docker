import express from "express";
import Controllers from "../controllers/petController";

const routes = express.Router();

routes.get("/", Controllers.index);

export default routes;
