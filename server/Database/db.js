import mongoose from "mongoose";
mongoose.set('strictQuery', false);

const Connection=async(user,pass)=>{
    const URI=`mongodb+srv://${user}:${pass}@crudapp.gsdna7c.mongodb.net/CRUD_APP?retryWrites=true&w=majority`;
    try{
        await mongoose.connect(URI,{useNewUrlParser: true, useUnifiedTopology: true});
        console.log("datbase connected");
    }catch(err){
       console.log(err);
    }
}

export default Connection;