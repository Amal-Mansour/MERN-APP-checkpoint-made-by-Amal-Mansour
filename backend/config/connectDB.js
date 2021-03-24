// require mogoose
const mongoose = require("mongoose");

// connection to data base 

const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateindex:true,
                useFindAndModify:true
            })
        console.log('Database is connected  to DB...')
    } catch (error) {
        console.error(`connection to  dDatabase failed!!! ${error}`)
    }
}

module.exports = connectDB