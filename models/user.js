const mongoose= require ("mongoose");
const bcrypt= require('bcrypt');
const Schema=mongoose.Schema;

const UserSchema= new Schema({

    email:{type:String,required:true, lowercase:true,unique:true},
    password:{type:String, required:true, unique:true},
    registerDate:{type:Date,default:Date.now()},
    favorites:[{type:Schema.Types.ObjectId,ref:'Album'}],  
});

UserSchema.statics.signup=signup;


module.exports= mongoose.model('user',UserSchema,'users');

function signup(userInfo){    
    if (!userInfo.email )
       throw new Error('email is invalid');
    if (!userInfo.password)
       throw new Error('password is required');      
       return this.findOne({ email: userInfo.email })
         .then(user => {
            if (user)
               throw new Error('user already exists');               
              const newUser = {
                email: userInfo.email,
                password: bcrypt.hashSync(userInfo.password, 9),              
              };
             return this.create(newUser);
          })
         .then(userCreated => userCreated); 
}

 UserSchema.pre("save",function(next){
    let user= this;
    bcrypt.genSalt(9,(error,salt)=>{
      bcrypt.hash(user.password,salt,null,(error,hash)=>{
        user.password=hash;
        next();
      });      
    });
  });
 
 UserSchema.methods.comparePassword=(password)=>{
     let user=this;
     return bcrypt.compareSync(password,user.password);
  }