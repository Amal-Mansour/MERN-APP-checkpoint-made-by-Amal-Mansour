//require mongoose
const mongoose = require('mongoose')

// Contact schemas


  const  schema  = mongoose.Schema;
//   const schema =mongoose.Schema 2 methode

const contactSchema = new schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    phone:Number,
})

module.exports = Contact = mongoose.model('contact' , contactSchema)