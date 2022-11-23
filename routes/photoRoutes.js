const express=require('express');
const route= express.Router();
const photoControllers=require('../controllers/photoControllers');


route.post('/createPhoto', photoControllers.createPhoto);
route.get('/getPhoto/:album', photoControllers.getPhoto);
route.delete('/deletePhotoById/:_id', photoControllers.deletePhotoById);
route.put('/upDatePhoto', photoControllers.upDatePhoto);

module.exports=route;