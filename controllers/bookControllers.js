const { books } = require("../database/connection")

exports.fetchBooks = async(req,res)=>{
      const datas = await books.findAll()
      res.json({
         name : "Its End with us",
         author: "Hollow Cloves",
         datas
      })
   }

exports.addBooks = async(req,res)=>{

      // logic to create data
      const {bookName,bookPrice,bookAuthor,bookGenres} = req.body //render a json from postman 

      if(bookName && bookPrice && bookAuthor && bookGenres){
         await books.create({
            bookName,
            bookPrice,
            bookAuthor,
            bookGenres
         })
         res.json({
            message: "received sucessfully"
         })
      }
      else{
         res.json({
            message : "Invalid Input"
         })
      }
      
   }

exports.editBooks =  async(req,res)=>{
try{
   const id = req.params.id

   const {bookName,  bookPrice,bookAuthor, bookGenres} = req.body
   await books.update({bookName,bookPrice,bookAuthor,bookGenres}, {

      where : {
         id
      }})

    
    res.json({
       message: "updated sucessfully"
    })}
    catch{
      res.json({
         message : "Something went wrong"
      })
    }
 }

exports.deleteBooks = async(req,res)=>{

    const id = req.params.id
    await books.destroy({
        where:{
            id
        }
    })
    res.json({
       message: "Deleted sucessfully"
    })
 }