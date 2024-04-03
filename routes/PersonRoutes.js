const express = require('express');
const Person = require('../modles/person');
const router= express.Router();
router.post('/' , async(res , req)=>{
  try {
    const data = req.body;
    //create a new Person document using the Mongoose model

    const newPerson = new Person(data);
    //save data to the database
    const response = await newPerson.save();
    console.log("Data is saved on a Route Ansh congrats");
    res.statusCode(200).json(response);
  } catch (error) {
    console.log(error)
    re.status(500).json({error:'Internal Server Error'});
  }
})

router.get('/' , async(req , res)=>{
  try{
    const data = await Person.find();
    console.log('Data is Fecthed ansh on routes');
    res.status(200).json(data);
  }catch(error){
    console.log(error);
    res.status(500).json({error:'Internal Server Error'});
  }
})

router.get('/:workType' , async(req , res)=>{
  try {
    const workType = req.params.workType//Extract the worktype from the URL parameter
    if(workType == 'chef' || workType == 'manager' || workType == 'waiter'){
      const response = await Person.find({work: workType});
      console.log('params response fetched');
      res.status(200).json(response);
    }
  } catch (error) {
    console.log('Galat hai chutiye');
    res.status(500).json({error: 'Internal server is error'}) 
  }
})


router.put('/:id' , async(req , res)=>{
  try {
    const personId = req.params.id; //Extract the id from the URl parameter
    const updatedPersonData = req.body; //Update data for the person

    const response = await Person.findByIdAndUpdate(personId , updatedPersonData,{
       new: true, // Return the updated document
       runValidators: true,  // Run Mongoose validation
    } );
        if(!response){
          return res.status(404).json({err: 'Person not found'});
        }

    console.log('data updated');
    res.status(200).json(response);

    
  } catch (err) {
    console.log(err);
    res.status(500).json({err: 'Internal Server Error'});
  }
})

router.delete('/:id' , async(req , res) =>{
  try {
    const response = req.params.id; // Extract the person's ID from the URL parameter
    if(!response){
      res.status(404).json({err: 'Person not found'});
    }
    console.log('data delete');
    res.status(200).json({message: 'Person Deleted successfully'});
  } catch (error) {
    console.log(error);
    res.status(200).json({error: 'Internal server error' })
  }
})
module.exports = router;
