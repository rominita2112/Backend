const getModelByName= require('../db/getModelByName');
const Photo=getModelByName('photo'); 


module.exports.getPhoto= async(req,res)=>{
  try{
     const {album}=req.params;
     const result1= await Photo.findById(album);  
     result1.find(id);
     res.status(200).send({result1});
   }catch (error){
    return res.status(500).send({message:'something went wrong',error});
   }   
 };
       
module.exports.createPhoto=  (req,res)=>{ 
  try{ 
      const{title,description,urlDeImagen}=req.body;
      const result= new Photo({title,description,urlDeImagen});
      result.save(this.createPhoto);
       return res.status(201).send(result);   
    } catch (error){
      res.status(500).send({success:false,error:error.message})
    }
};

module.exports.upDatePhoto= async(req,res)=>{      
   const{title}=req.body; 
   const upPhoto= await Photo.findOneAndReplace({title});
   res.status(200).send(upPhoto);
   return res.status(500).send({message:'changed'})   
};


module.exports.deletePhotoById=(req,res)=>{
  const {album}= req.params;
  Photo.findByIdAndDelete(album ,(err) => {
    if(err)
    res.status(500).send({message:'error'});           
    if(!err) 
    res.status(200).send({message:'photo removed'});      
  });
};


        
   


