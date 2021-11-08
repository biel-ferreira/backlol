const mongoose = require('mongoose');

const items = mongoose.model("items", {
    
    item_id: Number,
    name : String,
    upper_item : [String],
    explain : String,
    buy_price : Number,
    sell_price : Number,
    tag : String
    
})

module.exports = items;