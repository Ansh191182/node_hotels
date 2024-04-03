const express = require('express');
const router = express.Router();
const menu = require('../modles/menu');



router.post('/' , async(req , res)=>{
  try {
    const data = req.body;
    const newMenu = new menu(data);

    // save data on the data base
    const response =  await newMenu.save();
    console.log('Menu data is posted ansh keep it up');
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({err: 'Internal server error on posting the data '});
  }
})
router.get('/' , async(req,res)=>{
  try {
    const data = await menu.find();
    console.log('Menu data is succeffully fetched ansh congrats');
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({err: "Internally error of fetching data of menu"})
  }
})

router.put('/:id' , async(req , res)=>{
  try {
    const menuId = req.params.id// Extact the parameter from the URL

    const updateMenuData = req.body;

    const response = await menu.findByIdAndUpdate(menuId , updateMenuData ,{
      new: true,
      runValidators: true,
    } )

      if(!response){
        res.status(404).json({err: 'Data is not able to fetched '});
      }
       console.log("Meuitem item is ready for update now Go and Update");
       res.status(200).json(response);
    
  } catch (error) {
    console.log(error);
    res.status(500).json({err: 'Internal server is error'})
  }
})
module.exports = router;