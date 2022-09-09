import { Sequelize } from 'sequelize'

const dbOptions = {
    //DB variables 
    username: process.env.SERVER_DB_USER || "root",
    password: process.env.SERVER_DB_PASSWORD || "",
    database: process.env.SERVER_DB_NAME || "dbApiTS",
    host:     process.env.SERVER_HOST || 'localhost',
    port:     Number(process.env.SERVER_PORT) || 3050,
    dialect:  process.env.SERVER_DB_DIALECT || 'mysql',
    dialectOptions: {
        bigNumberStrings: true
    },
    logging: true,
};

const db = new Sequelize(dbOptions.database, dbOptions.username, dbOptions.password, {
    host: dbOptions.host,
    dialect: 'mysql', //dbOptions.dialect
    logging: dbOptions.logging
});

export default db