import express from "express";
import routes from "./routes";
require("dotenv").config();
const app = express();

app.use(routes);

app.listen(3000);
