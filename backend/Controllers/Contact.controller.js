

//post handler 

const { model } = require("mongoose");
const { modelName } = require("../Models/Contact");

const postContact = async (req , res) =>{

try{
    const {name,email,phone} = req.body
    // name and mail are required
    if(!name || !email){
      res.status(400).send({msg :'name and email are requires... !!!'})
      return ;
    }
    //email is unique
    const contact = await contact.findOne({email})
    if(contact){
      res.status(400).send({msg :'contact alredy exist!!..'})
      return;
    }
    const newContact =  new Contact({
      name,
      email,
      phone
    }) 
    await newContact.save()
    res.status(200).send({msg:'Contact added successfully....',newContact})
  
  }catch (error){
  res.status(400).send({msg:'can not add a news contact...', error})
  }
  }


  //GET ALL CONTACT 


  const getAllContacts = async(req ,res)=>{
    try {
      const listOfContact = await Contact.find()
      res.status(200).send({msg :'This is the list of contact ...',listOfContact})
    } catch (error) {
      res.status(400).send({msg : 'you can not get the list of contact',error})
    }
}


//GET ONE CONTACT
const  getContact = async(req,res)=>{
    try {
       const contactIdFind = await Contact.findOne({_id:req.params.id})
       res.status(200).send({msg: 'I get the contact...', contactIdFind})
    } catch (error) {
       res.status(400).send({msg:'can not get contact with this id',error})
    }
  
}

// DELETE CONTACT 

const deleteContact = async(req,res)=>{
    const{_id } = req.params
    try { 
      const contacToDelete = await Contact.findOneAndDelete({ _id })
      if(!contacToDelete){
        res.status(400).send({msg:'contact alredy deleted!!...'})
        return
      }
      res.status(200).send({msg:'contact is deleted...',contacToDelete})
      
    } catch (error) {
      res.status(400).send({msg:'Can not delete contact with this id!!...'})
    }
  }

  // EDIT AND UPDATE CONTACT

  const editContact = async(req,res)=>{
    try {
      const {_id } = req.params
      const result = await Contact.updateOne({ _id }, {$set: {...req.body} })
      if(!result.nModified){
        res.status(400).send({msg: 'Contact is already updated...'})
        return
      }
      res.status(200).send({msg:'Contact is update'})
    } catch (error) {
      res.status(400).send({msg : 'Can not update contact with this id!!!',error})
    }
  }
  

  model.exports = { postContact,getAllContacts,getContact,deleteContact,editContact }