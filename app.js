require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT || 5000;

const products_routes = require("./routes/products");

app.get("/", function(req, res){
  res.send("Hi, I am Amar");
});

//middleware or to set a router
app.use("/api/products",products_routes);

const start = async () => {
    try{
        await connectDB(process.env.MONGODB_Url);
        app.listen(PORT, ()=>{
         console.log( `application started ${PORT}`);
        });
    }catch(error){
        console.log(error);
    }
};
 
start();

//atlas password -->hello#1234
//mongodb+srv://amar2115425:<password>@restapi.bxtts5u.mongodb.net/?retryWrites=true&w=majority