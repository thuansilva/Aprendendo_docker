import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
    username: process.env.POSTGRESS_USERNAME,
    password: process.env.POSTGRESS_PASSWORD,
    database: process.env.POSTGRESS_DATABASE,
    host: process.env.POSTGRESS_HOST || "localhost",
    port: 5432 || process.env.POSTGRESS_PORT,
    dialect: "postgres",
    define: {
        timestamps: true,
        underscored: true,
    },
});

export default sequelize;
