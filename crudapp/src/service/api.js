import axios from "axios";

 const URL='http://localhost:8000';

export const addUserDetails = async(data)=>{
    try{
      return await axios.post(`${URL}/add`,data);
    }catch(err){
       console.log("Error while call Api is:",err);
    }
}

export const showUserDetail = async()=>{
    try{
      return await axios.get(`${URL}/all`);
    }catch(err){
      console.log(`There is an error: ${err}`);
    }
}

export const getUser = async(id)=>{
  console.log(id);
  try{
     return await axios.get(`${URL}/${id}`)
  }catch(err){
    console.log(`There is an error: ${err}`);
  }
}


export const editUserDetails = async(data,id)=>{
  try{
    return await axios.put(`${URL}/${id}`,data);
  }catch(err){
     console.log("Error while call Api is:",err);
  }
}


export const deleteUser= async(id)=>{
   try{
    return await axios.delete(`${URL}/${id}`);
   }catch(err){
    console.log("Error while call Api is:",err);
   }
}