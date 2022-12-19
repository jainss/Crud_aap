import mongoose from "mongoose";
import autoIncremet from "mongoose-auto-increment";

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    }
});

autoIncremet.initialize(mongoose.connection);
userSchema.plugin(autoIncremet.plugin,'user');


const user=mongoose.model('user',userSchema);
export default user;