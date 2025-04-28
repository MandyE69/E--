// eha chai sequlize lai import gareko --require use garera 
//sequelize bhaneko ORM hoo jun le chai database ra backend lai connect garna help garcha
const {Sequelize, DataTypes}= require('sequelize')

//NOTE: CLASS SADHAI CAPITAL LETTER BATA START HUNCHA
//eha chai supabase connect gareko through ORMs, jun chai hamle Sequelize class use garera gareko chau 
const sequelize = new Sequelize("postgresql://postgres.mnecbpkaxgcvzerxhmda:Eपुस्तकालय1122@aws-0-ap-south-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate() // esma chai then ra catch use garera error handling gareko connection bhaye then ko message jancha natra chai catch ko..
.then(()=>{
    console.log("Authentication completed, connected Successfully")
})
.catch((err)=>{
    console.log("ERROR "+err)
})

// now lets create a object of the classes which will be exported
const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//export gareko aba
module.exports = db;