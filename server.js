const express = require('express');
const app = express();
const db  = require('./db')
const bodyParser = require('body-parser');
app.use(bodyParser.json()) //store in req.body
app.get('/' , function(req , res){
  res.send("Welcome to my hotel... How i can help you ?, we have lists of menu");
})
 
 //Import Router File
 const personRoutes = require('./routes/PersonRoutes');
 app.use('/person' , personRoutes);

 // Import Menu file from menus Routes
 const menuRoutes = require('./routes/menuRoutes');
 app.use('/menu' , menuRoutes)

app.listen(3000 , ()=>{
 
  console.log("successfully listening at port 3000");
});






























// const jsonString = '{"name": "john" , "age": 30 , "city": "New York"}';
// const jasonObject = JSON.parse(jsonString);
// console.log(jasonObject.name);


// const objectToConvert = {
//   name: "Ansh",
//   age: 25,

// }
// const json = JSON.stringify(objectToConvert);
// console.log(json);
// console.log(typeof json);

// const _ = require('lodash')
// const notes = require('./notes');
// console.log("Server file is available");

// let age = notes.age;
// console.log(age);

// const result =  notes.addNumber(age+10 , 18);

// console.log('result is now ' +result);


// const data  = ["Ansh" , "Ansh" , 1,2,1,1];
//  var filter = _.uniq(data);
//  console.log(filter);

//  console.log(_.isString('false'));

// const fs = require('fs');
// const os = require('os');

// const user = os.userInfo();
// console.log(user.username);
// fs.appendFile('greeting.text' , 'HI Ansh' + user.username + '!/n' , ()=>{
//   console.log('file is created');
// })


// console.log(os);
// console.log(fs);
























// let age = 89;
// if(age <=18){
//   console.log("You get a 20% discount");
// }
// else if(age >18<=65){
//   console.log('normal ticket price')
// }
// else if(age>65){
//   console.log('you get a 30% senior  discount')
// }

// function callBack(){
//   console.log("Ansh is calling the call Back funtion");
// }
// const callBack =  () =>{
//   console.log("Ansh is calling the call bck funtion");
// } 
// const add = (a , b , callBack) =>{
//   callBack();
//   var result = a+b;
//   console.log("result" + result);

// }
// add(5 , 4, callBack);