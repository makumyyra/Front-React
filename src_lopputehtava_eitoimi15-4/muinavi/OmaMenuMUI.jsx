import { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InfoIcon from '@mui/icons-material/Info';
import PersonIcon from '@mui/icons-material/Person';
//import OmaDrawerMUI from './OmaDrawerMUI';

function OmaMenuMUI() {

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

            <MenuItem onClick={menuClose}>
                <ListItemIcon><InfoIcon /></ListItemIcon>
                <ListItemText primary='Lisää' />
            </MenuItem>

            <MenuItem onClick={menuClose}>
                <ListItemIcon><PersonIcon /></ListItemIcon>
                <ListItemText primary='Omat tiedot' />
            </MenuItem>
        </Menu>



    return (
        <Box>

            <Toolbar>
                <IconButton color='inherit' onClick={menuOpen}><MenuIcon /></IconButton> {menu}
                {/*  <IconButton color='inherit'>{<OmaDrawerMUI />}</IconButton> */}
            </Toolbar>


        </Box>
    );
}

export default OmaMenuMUI;