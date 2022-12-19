import {Table, TableHead, TableCell, TableRow} from '@mui/material';


const AllUser = () => {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
    </Table>
  );
};

export default AllUser;
