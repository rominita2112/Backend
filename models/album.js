const mongoose= require ("mongoose");
const Schema=mongoose.Schema;

const AlbumSchema= new Schema([{
    title:{type:String, lowercase:true},
    description:{type:String,lowercase:true,required:true,unique:true},
    urldeImagen:{type:String, required:true, unique:true},
    category:{type:String,lowercase:true},
    photos:[{type:Schema.Types.ObjectId,ref: 'Photo'}],
    users:{type:Schema.Types.ObjectId,ref:'User'},
}]);


module.exports=mongoose.model('album',AlbumSchema,'albums');