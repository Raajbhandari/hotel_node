const express=require('express');
const router=express.Router();
const MenuItem=('./../models/menu')


router.post('/', async (req, res) => {
    try {
      const data = req.body;
      const newdata = new menu(data); // Assuming `menu` is the correct model
  
      const response = await newdata.save();
  
      console.log('Saved data successfully');
      res.status(200).json({ message: 'All good' });
    } catch (err) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  module.exports=router
