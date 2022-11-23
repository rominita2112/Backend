const express=require('express');
const route= express.Router();
const userControllers =require('../controllers/userControllers');
const auth =require('../middlewares/auth');
const jwt=require('jwt-simple');

route.post('/signup', userControllers.signup);
route.post('/login', userControllers.login);
route.get('/hi', auth,userControllers.hi);
route.get('/FavByIdAlbum',userControllers.FavByIdAlbum);



  

module.exports=route;