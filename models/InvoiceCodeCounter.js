const mongoose = require('mongoose')

const InvoiceCounterSchema = new mongoose.Schema({
 sequence_val :{

    type: Number,
    default : 0
 },
 id:String, 
 

})

module.exports = mongoose.model("InvoiceCounter",InvoiceCounterSchema)