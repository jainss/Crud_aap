import {
  FormGroup,
  FormControl,
  Input,
  InputLabel,
  styled,
  Button,
  Typography,
} from "@mui/material";
import { useState,useEffect } from "react";
import { editUserDetails } from "../service/api";
import { useNavigate, useParams } from "react-router-dom";
import { getUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultValue = {
  name: "",
  email: "",
  phone: "",
  username: "",
};


const EditUser = () => {

  const [user, setUser] = useState(defaultValue);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  },[]);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data);
  };

 

  const onClickValue = (e) => {
    // console.log(e.target.name +" ,"+e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
    // console.log(user);
  };

  const onSubmit = async () => {
    await editUserDetails(user,id);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Edit Details</Typography>
      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onClickValue(e)} name="name" value={user.name} />
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onClickValue(e)} name="username" value={user.username}/>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onClickValue(e)} name="email" value={user.email}/>
      </FormControl>
      <FormControl>
        <InputLabel>Phone Number</InputLabel>
        <Input onChange={(e) => onClickValue(e)} name="phone" value={user.phone} />
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => onSubmit()}>
          Edit Details
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;
