const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const userModel = (sequelize, DataTypes) =>{
    const USER =  sequelize.define("user", {
        userName: {
            type : DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type : DataTypes.STRING
        }
    })
    console.log('table ta banyoo tara dekhiyena')
    return USER;
}

module.exports = userModel;