const jwt= require('jwt-simple');
const {DateTime}=require('luxon');

const tokenCreated=(user)=>{
    const payload={
        sub:user._id,
        iat:DateTime.now().toMillis(),
        exp:DateTime.now().plus({day:30}).toMillis()
    }
    return jwt.encode(payload,process.env.SECRETKN);
}
const tokenDecoded=(token)=>{
    const decode=new Promise((resolve,reject)=>{
      try{
          const payload=jwt.decode(token, proccess.env.SECRETKN);
          if(payload.exp<DateTime.now().toMillis()){
             reject({status:(401),message:"token expired"});
            }
            resolve(payload.sub);
        }catch(error){
            reject({status:500,message:"token invalid"});
        }
    });
 return decode;    
}

module.exports={tokenCreated,tokenDecoded};