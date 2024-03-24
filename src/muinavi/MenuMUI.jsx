import { useState } from 'react';
import { Box, AppBar, Toolbar, IconButton, Typography, Menu, MenuItem, ListItemText, ListItemIcon } from '@mui/material';
import ListIcon from '@mui/icons-material/List';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';

function MenuMUI() {

  const [anchorMenu, setOpenNavi] = useState(null);

  const menuOpen = (e) => {
    setOpenNavi(e.currentTarget);
  }

  const menuClose = () => {
    setOpenNavi(null);
  }

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h5' sx={{ flexGrow: 1, textAlign: 'center' }}>Matkat</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MenuMUI;
