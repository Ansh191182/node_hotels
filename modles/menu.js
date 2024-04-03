const mongooose = require('mongoose');

const menuItemSchema = new mongooose.Schema({
  name:{
    type: String,
    required: true,
  },
  price:{
    type: String,
    required: true,
  },
  taste:{
    type: String,
    enum: ['Sweet' , 'Spicy' , 'Sour'],
    required:true,
  },
  is_drink:{
    type: Boolean,
    default:false
  },
  ingredients:{
    type: [String],
    default:[]
  },
  num_sales:{
    type: Number,
    default: 0,
  }
})

const menu = mongooose.model('menu' , menuItemSchema);

module.exports = menu;