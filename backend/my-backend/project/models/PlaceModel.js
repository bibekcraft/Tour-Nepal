const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://username:password@localhost:5432/tourismDB');  

const Place = sequelize.define('Place', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  daytravel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nighttravel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  TotalTime: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Place;
