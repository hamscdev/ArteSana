const Sequelize = require('sequelize');
const db = require('../config/database_config');

const Users = db.define('User', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true, 
    defaultValue: Sequelize.UUIDV4
  },
  username: Sequelize.STRING,
  email: Sequelize.STRING,
  password: Sequelize.STRING,
  active: Sequelize.BOOLEAN,
  createdAt: Sequelize.DATE,
  updateAt: Sequelize.DATE
});


module.exports = Users;
