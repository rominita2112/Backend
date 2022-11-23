const mongoose=require('mongoose');
require('../models/user')
require('../models/album.js')
require('../models/photo.js');

function getModelByName(name){
    return mongoose.model(name);
};

module.exports=getModelByName;