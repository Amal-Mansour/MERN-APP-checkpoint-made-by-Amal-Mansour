// require express 
const express = require('express')

// routes
const router = express.Router()

//require contact model
const Contact = require('../Models/Contact')


// require controller 

const {
     postContact,
     getAllContacts,
     getContact,
     deleteContact,
     editContact,
} = require('../Controllers/Contact.controller)

//now we will create the routes 
//**************************************ROUTES************************** *//
// /** 
// @desc : test route
// @path:http://localhost:7000/api/contacts/test
// @method:GET
//@data:no data
// @acess:puplic
// */
router.get('/test',(req,res)=>{
  res.send("hello test")
})

//now we will create the all routes 
//**************************************ROUTES************************** *//
// /** 
// @desc : add contact
// @path:http://localhost:7000/api/contacts/
// @method:POST
//@data:req.body
// @acess:puplic
// */
router.post('/', postContact)




// /** 
// @desc : get all contact
// @path:http://localhost:7000/api/contacts/
// @method:GET
//@data:req.body
// @acess:puplic
// */
router.get('/', getAllContacts)






router.get('/:id',getContact)

// /** 
// @desc : delete contact
// @path:http://localhost:7000/api/contacts/:_id
// @method:Delete
//@data:req.params
// @acess:puplic
// */

router.delete('/:_id',deleteContact)

//** 
// @desc : delete contact
// @path:http://localhost:7000/api/contacts/:_id
// @method:PUT
//@data:req.params & req.body
// @acess:puplic
// */

router.put('/:_id',editContact )



module.exports = router