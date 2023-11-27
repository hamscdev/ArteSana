
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PGDATABASE, 
    process.env.PGUSER, 
    process.env.PGPASS, 
    {
    host: process.env.PGHOST,
    dialect: 'postgres'}
);
module.exports = sequelize;