//books, bookAuthor, bookPrice, bookGenre, bookName

const { type } = require("os");

// const { type } = require("os")

const bookModel = (sequelize, DataTypes)=>{
    const Book = sequelize.define('book',{
        bookName :{
            type : DataTypes.STRING,
            allowNull : false,
        },
        bookPrice :{
            type : DataTypes.INTEGER,
            allowNull : false
        },
        bookAuthor :{
            type : DataTypes.STRING,    
            allowNull : false
        },
        bookGenres :{
            type: DataTypes.STRING
        }
    })
   
    return Book;
}

module.exports = bookModel;