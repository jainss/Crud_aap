import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import { useEffect, useState } from "react";
import { showUserDetail } from "../service/api";
import { styled } from "@mui/system";

const StyleTable=styled(Table)
`
  width: 90%;
  margin: 50px 0 0 50px;
`
const THead = styled(TableRow)
`
& > th {
  background: #000000;
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

  return (
    <StyleTable>
      <TableHead>
        <THead>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </THead>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <TRow>
            <TableCell>{user._id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
          </TRow>
        ))}
      </TableBody>
    </StyleTable>
  );
};

export default AllUser;
