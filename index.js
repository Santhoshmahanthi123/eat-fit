const express = require("express");
const app = express();
const port = 8080;
app.use(express.urlencoded({ extended: true }));
const foodRoutes = require("./routes/food");
const orderRoutes = require("./routes/order");
app.get("/",(req,res)=>{
    res.json({"message":"welcome to eat fit!"})
})
app.use("/",foodRoutes);
app.use("/",orderRoutes);
app.listen(port,()=>{
    console.log(`listening on port: ${port}`)
})