const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({extended :true}));
const userRoutes=require('./routes/userRoutes');
const albumRoutes=require('./routes/albumRoutes');
const photoRoutes=require('./routes/photoRoutes');
const mongoose=require('mongoose');

app.use('/account' ,userRoutes);
app.use('/account', albumRoutes);
app.use('/account', photoRoutes);


app.listen(process.env.PORT,()=>
  console.log("estoy escuchando desde el puerto 5100"));

mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true},(error, respose)=>{
 if(error){
    return console.log('no te conectaste a la base de datos');
  } 
  console.log('te conectaste exitosamente a mongoose');  
  
});