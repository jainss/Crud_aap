import { FormGroup,FormControl, Input, InputLabel, styled, Button } from '@mui/material';
import { useState } from 'react';
import { addUserDetails } from '../service/api';


const Container=styled(FormGroup)
`
width:50%;
margin: 5% auto 0 auto;
& > div{
  margin-top:20px;
}
`;

const defaultValue={
    name:"",
    email:"",
    phone:"",
    username:""
 }

const AddUser=()=>{

    const [user, setUser] = useState(defaultValue);

    const onClickValue=(e)=>{
        // console.log(e.target.name +" ,"+e.target.value);
        setUser({ ...user , [e.target.name]:e.target.value});
        console.log(user);
    }

    const onSubmit=async()=>{
        await addUserDetails(user);
    }

    return (
       <Container>
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=>onClickValue(e)} name="name" />
           </FormControl> 
           <FormControl>
            <InputLabel>Username</InputLabel>
            <Input onChange={(e)=>onClickValue(e)} name="username" />
           </FormControl>      
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e)=>onClickValue(e)} name="email" />
           </FormControl>   
           <FormControl>
               <InputLabel>Phone Number</InputLabel>
               <Input onChange={(e)=>onClickValue(e)} name="phone" />
           </FormControl>   
           <FormControl>
               <Button variant="contained" onClick={()=>onSubmit()}>Submit</Button>
           </FormControl> 
       </Container>
       
    )
}

export default AddUser;