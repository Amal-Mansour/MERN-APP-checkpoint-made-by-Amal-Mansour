//1.require expess
const express = require('express')

// 2.instane of express
const app = express()

//4. Require dotenv and congifgure
require('dotenv').config()

//7. Middleweare parser

app.use(express.json())


//5.connect to Data Base

const connectDB = require('./config/connectDB')
connectDB()


//6.Routes

app.use('/api/contacts' ,require('./Routes/contact'))

// 3.create the PORT
const PORT =  process.env.PORT

//4.create server with app.lesten
app.listen(PORT,err =>
   err ? console.error(err)
    :
    console.log(`server is runing on port ${PORT}...`)
    )
    