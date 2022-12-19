import {AppBar,Toolbar,styled} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Header=styled(AppBar)
`
background: #111111;
`;

const Taps=styled(NavLink)
`
font-size:20px;
font-weight:600;
margin-right: 30px;
text-decoration: none;
color:inherit;
`;

const Navbar=()=>{
    return (
       <Header position='satatic'>
        <Toolbar>
            <Taps to='/' >Home</Taps>
            <Taps to='/all' >All User</Taps>
            <Taps to='/add' >Add User</Taps>
        </Toolbar>
       </Header>
    )
}

export default Navbar;
