import { Sequelize } from "sequelize";
import mongoConfig from "../config/database";

const sequelize = new Sequelize(mongoConfig);

export default sequelize;
