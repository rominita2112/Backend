const getModelByName=require('../db/getModelByName');
const Album=getModelByName('album');


module.exports.getAlbum=async(req,res)=>{
 try{
   const album=await Album.find();  
     res.status(200).send(album);
  }catch (error){
    return res.status(500).send({message:'something went wrong',error});
  }   
};

module.exports.getAlbumById= async (req,res)=>{  
  const {_id}=req.params;
  try{
   const result= await Album.findById(_id);
   res.status(200).send(result);
  }catch(error){
   return res.status(500).send({message:'something went wrong',error})
  }
};        
    
module.exports.createAlbum= (req,res)=>{  
 try{ 
     const{title,description,urlDeImagen,category}=req.body;
     const{id}=req.params; 
     const newAlbum= new Album({id,title,description,urlDeImagen,category});
     newAlbum.save(this.createAlbum);
     return res.status(201).send(newAlbum);
    }catch(error){
     res.status(500).send({message:'fail', error:error.message})
    }
};  

module.exports.upDateAlbum= async(req,res)=>{   
  const {title,description,urlDeImagen,category}=req.body; 
  const upAlbum= await Album.findOneAndUpdate({title,description,urlDeImagen,category});
  res.status(200).send(upAlbum);
  res.status(500).send({success:false,message:'error'});
};

module.exports.deleteAlbumById= async (req,res)=>{    
  const {_id}=req.params;
  await Album.findByIdAndDelete(_id);
  res.status(200).send({message:'removed'});           
  return res.status(500).send({message:'error'});
};