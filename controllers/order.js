const data = require("./food");
const placeOrder = async (req,res) =>{
    // console.log(data.foodsAvailable)
    const food_data =await data.foodsAvailable();
    var i;
    console.log("$$$$$$$$",food_data);
    console.log("&&&",req.body)
    const id = JSON.parse(req.body.id);
    for(i=0;i<food_data.length;i++){
        if(id==food_data[i].product_id){
            res.json({"message":"oder placed!"});
        }else{
            res.json({"message":"You selected the wrong order!"});
        }
    }
}
module.exports ={
    placeOrder
};