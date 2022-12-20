import User from '../model/user-model.js';


export const addUser=async(req,res,next)=>{
    const user=req.body;
    const newUser=new User(user);
    try{
        await newUser.save();
        res.status(201).json({newUser});
    }catch(err){
        res.status(409).json({message: err.message});
    }
}


export const getUsers=async(req,res,next)=>{
   try{
      const users= await User.find({});
      res.status(201).json(users);
   }catch(err){
      res.status(409).json({message:err.message});
   }
}