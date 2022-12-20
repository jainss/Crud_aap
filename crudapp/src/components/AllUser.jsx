import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { showUserDetail, deleteUser } from "../service/api";
import { styled } from "@mui/system";
import {Link} from  "react-router-dom";

const StyleTable=styled(Table)
`
  width: 90%;
  margin: 50px 0 0 50px;
`
const THead = styled(TableRow)
`
& > th {
  background: #808080
  ;
  color: #fff;
  font-size:20px;
  
}
`;

const TRow = styled(TableRow)`
    & > td{
        font-size: 18px
    }
`;


const AllUser = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    let response = await showUserDetail();
    setUsers(response.data);
  };

  const deleteuserDetails=async(id)=>{
    await deleteUser(id);
    getAllUsers();
  }

  return (
    <StyleTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Change</TableCell>
          <TableCell>Remove</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow key={user._id}>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button variant="outlined" component={Link} to={`/edit/${user._id}`}>Edit</Button>
            </TableCell>
            <TableCell>
              <Button variant="outlined" onClick={()=>deleteuserDetails(user._id)}>Delete</Button>
            </TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyleTable>
  );
};

export default AllUser;
