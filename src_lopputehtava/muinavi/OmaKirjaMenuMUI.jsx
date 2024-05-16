import { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
import OmaDrawerMUI from './OmaDrawerMUI';
import { Link, Outlet } from 'react-router-dom';
//import kuvia from '././public/kuvia';

function OmaKirjaMenuMUI() {


    const [anchorMenu, setOpenNavi] = useState(null);

    const menuOpen = (e) => {
        setOpenNavi(e.currentTarget);
    }

    const menuClose = () => {
        setOpenNavi(null);
    }

    const menu =
        <Menu
            anchorEl={anchorMenu}
            open={Boolean(anchorMenu)}
            onClose={menuClose}
            anchorOrigin={{ vertical: 'center', horizontal: 'left' }}>

            <MenuItem onClick={menuClose} component={Link} to='kappale'>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary='Kuuntele' />
            </MenuItem>

            <MenuItem onClick={menuClose} component={Link} to='elokuvat'>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary='Elokuvalista' />
            </MenuItem>

            <MenuItem onClick={menuClose} component={Link} to='kortit' data={data}>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary='Kuvia' />
            </MenuItem>
        </Menu>



    return (
        <Box>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton onClick={menuOpen} color='inherit'><MenuIcon /></IconButton>
                </Toolbar>
            </AppBar>
            <Menu
                anchorEl={anchorMenu}
                open={Boolean(anchorMenu)}
                onClose={menuClose}
                anchorOrigin={{ vertical: 'center', horizontal: 'left' }}>

                <MenuItem onClick={menuClose} component={Link} to='kappale'>
                    <ListItemIcon><InfoIcon /></ListItemIcon>
                    <ListItemText primary='Kuuntele' />
                </MenuItem>

                <MenuItem onClick={menuClose} component={Link} to='elokuvat'>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary='Elokuvat' />
                </MenuItem>

                <MenuItem onClick={menuClose} component={Link} to='kortit'>
                    <ListItemIcon><PersonIcon /></ListItemIcon>
                    <ListItemText primary='Kortit' />
                </MenuItem>
            </Menu>
            <Outlet />


        </Box>
    );
}

export default OmaKirjaMenuMUI;