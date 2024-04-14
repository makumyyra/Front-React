import { useState } from 'react';
import { Box, AppBar, Tabs, Tab } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import MatkalistaMUI from '../muicomponents/MatkalistaMUI';
import MatkalomakeMUI from '../muicomponents/MatkalomakeMUI';
import { Link, Outlet } from 'react-router-dom';


function TabMUI({ matkat }) {

  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }

  return (
    <Box>
      <AppBar position='static'> {/*tumma taustaväri; jos ei halua tummaa, poistetaan AppBar*/}
        <Tabs value={value} onChange={handleChange}
          textColor='inherit' centered> {/*variant='fullWidth'*/}
          <Tab label='Listaa' icon={<CreateIcon />} component={Link} to='listaa' />
          <Tab label='Lisää' icon={<ListIcon />} component={Link} to='lisaa' />
        </Tabs>
      </AppBar>
      {/* {value === 0 && <MatkalistaMUI matkat={/*ks.ylhäällä matkat} />} */}
      {/* {value === 1 && <MatkalomakeMUI />}   */}
      <Outlet />
    </Box>
  );
}

export default TabMUI;
