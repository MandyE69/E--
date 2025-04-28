const express = require('express')
const app = express()
require("./database/connection")

app.get("/books", (req,res)=>{
   res.json({
        name : "Its End with us",
        author: "Hollow Cloves"
   })
})

app.post("/books", (req,res)=>{
    res.json({
       message: "received sucessfully"
    })
 })

 app.patch("/books/:id", (req,res)=>{
    res.json({
        message: "updated sucessfully"
     })
 })

 app.delete("/books/:id", (req,res)=>{
    res.json({
        message: "Deleted sucessfully"
     })
 })

app.listen(4000, ()=>{
    console.log("server/pustakalaya/node project has started at port 3000")
})