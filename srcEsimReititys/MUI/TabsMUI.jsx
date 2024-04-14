import { useState } from 'react';
import { Box, AppBar, Tabs, Tab, } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';

import { Link, Outlet } from 'react-router-dom';

function TabsMUI() {
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }

  return (
    <Box>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} variant='fullWidth' textColor='inherit'>
          <Tab label='Etusivu' icon={<HomeIcon />} component={Link} to='/' />
          <Tab label='Lisää' icon={<CreateIcon />} component={Link} to='lisaa' />
          <Tab label='Listaa' icon={<ListIcon />} component={Link} to='listaa' />
        </Tabs>
      </AppBar>
      {/*
      {value === 0 && <KoiraMUI />}
      {value === 1 && <LomakeMUI />}
      {value === 2 && <ListaMUI tiedot={tiedot} />}
  */}
      <Outlet />
    </Box>
  )
}

export default TabsMUI;
