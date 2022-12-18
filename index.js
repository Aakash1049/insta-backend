const app= require("./app")
const { connectDatabase } = require("./config/db")

connectDatabase();


app.listen(process.env.PORT,()=>{
    console.log("server is running at port ",process.env.PORT)
})