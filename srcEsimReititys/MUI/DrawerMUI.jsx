import { useState } from 'react';
import { Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import CreateIcon from '@mui/icons-material/Create';

import { Link, Outlet } from 'react-router-dom';

function DrawerMUI() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <Box>
      <IconButton onClick={handleOpen}><MenuIcon /></IconButton>
      <Drawer anchor='left' open={open} onClick={handleClose}>
        <List>
          <ListItem component={Link} to='/'>
            <ListItemButton>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary='Etusivu' />
            </ListItemButton>
          </ListItem>
          <ListItem component={Link} to='lisaa'>
            <ListItemButton>
              <ListItemIcon><CreateIcon /></ListItemIcon>
              <ListItemText primary='Lisää' />
            </ListItemButton>
          </ListItem>
          <ListItem component={Link} to='listaa'>
            <ListItemButton>
              <ListItemIcon><ListIcon /></ListItemIcon>
              <ListItemText primary='Listaa' />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Outlet />

    </Box>
  )
}

export default DrawerMUI;
