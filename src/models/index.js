'use strict';
require('dotenv').config();
const Sequelize = require('sequelize');
const path = require("path");
const fs = require("fs");
const basename = path.basename(__filename);

const db = {};

let sequelize;

class DBSingleton {
    sequelize;
    constructor() {
        if (DBSingleton._instance) {
            return DBSingleton._instance
        }
        DBSingleton._instance = this;

        this.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
            dialect: process.env.DB_DIALECT,
            host: process.env.DB_HOST,
            pool: {max: 600, min: 5, acquire: 30000, idle: 1000},
            connectTimeout:60000*10,
            acquireTimeout: 60000,
            dialectOptions: {
                dateStrings: true,
                typeCast: true
            },
            timezone: '+05:30',
            logging: true //ENABLE IF NEEDED IN FALSE
        })
    }
}
sequelize = (new DBSingleton()).sequelize;
fs.readdirSync(__dirname)
    .filter(file => {
        return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
    })
    .forEach(file => {
        const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;