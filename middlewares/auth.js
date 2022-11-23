const{authLogin}=require('../services/authLo');

const auth= async(req,res,next)=>{

       try{      
         if(!req.headers.authorization){
           return res.status(401).send({message:'user not logeaded'});
         } 
         const token =req.headers.authorization.split(" ")[1];
         const response= await authLogin.tokenDecoded(token);
         req.user=response;
         next();
        } catch(error){
         res.status(500).send({message:"token not found"});
        }
}

  module.exports=auth;