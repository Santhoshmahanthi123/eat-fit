const foodsAvailable =  (req,res) =>{

  return jsonObj = 
        [
            {
                product_id :"123",
                product_name : "burger",
                price: 200
            },
            {
                product_id :"456",
                product_name : "sandwich",
                price: 120
            },
            {
                product_id :"7567",
                product_name : "cheese",
                price: 450
            },
            {
                product_id :"56785",
                product_name : "water",
                price: 20
            }
        ]
        res.send(jsonObj)
    
}
module.exports ={
    foodsAvailable
};