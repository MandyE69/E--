const { DataTypes } = require("sequelize");
const { sequelize } = require("../connection");

const productModel = (sequelize,DataTypes) =>{
    return sequelize.define("product",{
        productName : {
            type : DataTypes.STRING
        },
        productPrice : {
            type : DataTypes.STRING
        },
        productImage: {
            type : DataTypes.STRING
        }
    })
}

module.exports = productModel;