import { FormGroup,FormControl, Input, InputLabel, styled, Button, Typography} from '@mui/material';
import { useState } from 'react';
import { addUserDetails } from '../service/api';
import { useNavigate } from 'react-router-dom';
import { textAlign } from '@mui/system';


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

    const navigate= useNavigate();

    const [user, setUser] = useState(defaultValue);

    const onClickValue=(e)=>{
        // console.log(e.target.name +" ,"+e.target.value);
        setUser({ ...user , [e.target.name]:e.target.value});
        console.log(user);
    }

    const onSubmit=async()=>{
        await addUserDetails(user);
        navigate('/all');
    }

    return (
       <Container>
           <Typography variant='h4'>Add Details</Typography>
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