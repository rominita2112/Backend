const mongoose= require ("mongoose");
//const { photo } = require("../controllers/userControllers");
const Schema= mongoose.Schema;
//const{authLogin}=require('../services/authLogin')


const PhotoSchema=  new Schema({
    title:{type:String, lowercase:true},
    description:{type:String,required:true, lowercase:true,unique:true},
    urlDeImagen:{type:String, required:true, unique:true},
    id:{type:String,required:true,trim:true},
    album:{type:Schema.Types.ObjectId,ref:'Album'},
    users:[{type:Schema.Types.ObjectId,ref:'User'}]    
    });
   
  

module.exports=mongoose.model('photo',PhotoSchema,'photos');