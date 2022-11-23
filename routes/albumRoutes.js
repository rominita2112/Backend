const express=require('express');
const route= express.Router();
const albumControllers=require('../controllers/albumControllers');

route.get('/getAlbum', albumControllers.getAlbum);
route.get('/getAlbumById/:_id', albumControllers.getAlbumById);
route.delete('/deleteAlbumById/:_id', albumControllers.deleteAlbumById);
route.put('/upDateAlbum', albumControllers.upDateAlbum);
route.post('/createAlbum',  albumControllers.createAlbum);

module.exports=route;