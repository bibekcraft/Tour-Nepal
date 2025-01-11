const { INTEGER } = require("sequelize");

const UserShema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    phoneNumber:{
        type:INTEGER,
        required:true,
    },
    email:{
        type:String,
        required:true, 
    },
    phoneNumber:{
        type:String,
        required:true,
    },

},
 visitHistory:[{timestamps:{type: Number}}],
 createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Users',
 }

)
const User=mongoose.model("user",UserShema)