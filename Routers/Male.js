const express= require('express');
const routerMale= express.Router();
const{Male}=require('../Usuarios/usuarios.js').usuaryDates;
routerMale.use(express.json());


routerMale.get('/', (req, res) =>{
    res.status(200).send(Male)
});

routerMale.get('/:id', (req,res)=>{
    const id= req.params.id;
    const resultados=Male.filter(usuario=>usuario.id===id);
    if(resultados.length===0){
    res.status(404).send("no se encontraron resultados")}; 
     res.status(200).send(resultados)       
});

routerMale.get('/:id/Lastname=value&dni=value', (req,res)=>{
   const id= req.params.id;
   const Lastname= req.params.Lastname;
   const resultados=Male.filter(usuario=>usuario.Lastname===Lastname && usuario.id===id);
   if(resultados.length===0){
    res.status(404).send("no se encontraron resultados")}; 
     res.status(200).send(resultados);   
});

 routerMale.post('/', (req , res) =>{
   let usuarioNuevo = req.body;
   Male.push(usuarioNuevo);
   res.status(200).send(req.body);
   console.log(Male);
});

 routerMale.put('/:id', (req,res)=>{
 const nuevoId=req.body;
 const id= req.params.id;
 const indice=Male.findIndex(usuario=>usuario.id==id);
   if (indice >=0){
      Male[indice]=nuevoId; 
   };
    res.status(200).send(Male);
  });

 routerMale.delete('/:id', (req,res)=>{
    const id= req.params.id;
    const indice=Male.findIndex(usuario=>usuario.id==id);
   if (indice >=0){
      Male.splice(indice,2); 
   };
   res.status(200).send(Male);
});

module.exports=routerMale;