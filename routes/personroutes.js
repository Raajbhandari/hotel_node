const express=require('express');
const router=express.Router();
const person=require('./../models/person')

router.post('/', async (req, res) => {
    try {
      const data=req.body // assume the request body contain the person data
  
      const newperson=new person(data);
  
      //  save the data in the data base
      const savedata=await newperson.save();
      console.log('data is saved succesfully')
      res.status(200).json(savedata)
    }
    catch{
      res.status(400).json({error: 'internal server error'})
    }
  })

  router.get('/:worktype', async (req, res)=>{
    try{
      const worktype=req.params.worktype; // extract the worktype becoz it is parameter type so we write req.param.worktype
      
      // validation
      if(worktype=='chef' || worktype=='manager' || worktype=='waiter')
      {
        const response=await person.find({work:worktype})
        if(response.length<=0){
          return res.status(404).json({message: 'work not found in database'})
        }
        console.log('data is fetched succesfully')
        res.status(200).json({message: 'all good',response})
  
      }
      else{
        res.status(404).json({error: 'invalid worktype'})
      }
    }
    catch(err){
     console.log("error")
      res.status(404).json({error: 'internal server error'})
    }
  })

  module.exports=router
