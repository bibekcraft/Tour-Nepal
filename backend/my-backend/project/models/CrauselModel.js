const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://username:password@localhost:5432/tourismDB');  

const Crausel=sequelize.define('Crausel',{

    image:{
        type:DataTypes.STRING,
        allowNull:false
    }

})
module.exports=Crausel;