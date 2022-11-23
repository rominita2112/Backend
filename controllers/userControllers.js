const getModelByName=require('../db/getModelByName');
const services=require('../services/authLogin');
const Album= require('../models/album');

module.exports.signup=function (req, res){
    if(!req.body.user) {
    return res.send({success:false,error:'user info not found'})};
    const User = getModelByName('user');   
    try{
        User.signup(req.body.user)
        .then(() => {
             return res.status(201).send({success:true, message:'user created succesfully',token:services.tokenCreated(User)});
         }).catch (error => res.status(500).send({success:false,error:error.message}))
        
    }catch(error){
       return res.status(500).send({success:false,error:error.message});
    }
};

module.exports.login= function(req,res){    
    const User = getModelByName('user');
    const{email,password}=req.body;
       if(!email){
          return res.status(500).send('email not provided') 
        }
     User.findOne({email},(error,user)=>{
          if(error){
            return res.status(500).send({message:err,error})
          } 
          if(!user){
          return res.status(404).send('no user found')
          }
          if(password!==user.password){
          res.status(200).send({message:'successfully logged in',token:services.tokenCreated(User)})
          }
     });
}  

module.exports.hi=function(req,res){
  console.log(req.user)
}; 

module.exports.FavByIdAlbum= async (req,res)=>{
  const User = getModelByName('user');
  try{
      const{favorites}=req.params;
      const {users}=req.params;
      const result1= await User.findById(users)  
      result1.push(favorites);
      res.status(200).send(result1);
  }catch (error){
   return res.status(500).send({message:'something went wrong',error});
  } 
}