import { useState } from 'react';
import { Box, Menu, MenuItem, ListItemIcon, ListItemText, AppBar, Toolbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, Outlet } from 'react-router-dom';

function MenuMUI() {
  const [anchorMenu, setMenuOpen] = useState(null);

  const menuOpen = (e) => {
    setMenuOpen(e.currentTarget);
  }

  const menuClose = () => {
    setMenuOpen(null);
  }

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
        onClose={menuClose}>

        <MenuItem onClick={menuClose} component={Link} to='/'>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary='Etusivu' />
        </MenuItem>

        <MenuItem onClick={menuClose} component={Link} to='lisaa'>
          <ListItemIcon><CreateIcon /></ListItemIcon>
          <ListItemText primary='Lisää' />
        </MenuItem>

        <MenuItem onClick={menuClose} component={Link} to='listaa'>
          <ListItemIcon><ListIcon /></ListItemIcon>
          <ListItemText primary='Listaa' />
        </MenuItem>
      </Menu>

      <Outlet />

    </Box>
  )
}

export default MenuMUI;
