const express= require('express');
const app= express();
const dotenv= require('dotenv');
dotenv.config();
app.use(express.json());
const {usuaryDates} =require('./Usuarios/usuarios');
const routerMale= require('./Routers/Male.js');
app.use('/api/usuarios/Male', routerMale);


console.log(usuaryDates);


app.listen(process.env.PORT,()=>{
  console.log(`${process.env.MESSAGE} on port ${process.env.PORT}`)})