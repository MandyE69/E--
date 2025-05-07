   
   const express = require('express')
   const app = express()
   const bookRoute = require("./routes/bookRoutes")

   require("./database/connection")
   app.use(express.json())

   app.use("/api", bookRoute)

   app.listen(4000, ()=>{
      console.log("server/pustakalaya/node project has started at port 3000")
   })