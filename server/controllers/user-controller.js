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


export const getUser=async(req,res,next)=>{
    try{
        const user= await User.findById(req.params.id);
        res.status(201).json(user);
     }catch(err){
        res.status(409).json({message:err.message});
     }
}


export const editUser=async(req,res,next)=>{
   const user=req.body;
   const newUser=new User(user);

   try{
      await User.updateOne({_id:req.params.id},newUser);
      res.status(201).json(newUser);
   }catch(err){
      res.status(409).json({message:err.message});
   }
}

export const deleteUser= async(req,res,next)=>{
   try{
     await User.deleteOne({_id:req.params.id});
     res.status(201).json({message: "User Deleted "});
   }catch(err){
      res.status(409).json({message:err.message});
   }
}