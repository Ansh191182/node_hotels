const mongoose = require('mongoose');

//Define MongoDB connection URL

const mongoURL = 'mongodb://127.0.0.1:27017/hotels'//Replace 'datatbases' with your database name


// Set up MongoDB

// mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('MongoDB connection error:', err));


mongoose.connect(mongoURL , {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected' , ()=>{
  console.log('Connected to MongoDB server Ansh well Done');
});
db.on('error' , (err)=>{
  console.log('MongoDB connection error: not connected try again ' , err);
});
db.on('disconnected' , ()=>{
  console.log('MongoDB disconnected bad news try again to connect');
});


//Export DataBase connection
module.exports = db;
