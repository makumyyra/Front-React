import { useState } from 'react';
import { Box, AppBar, Tabs, Tab } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AvatarMUI from '../muicomponents/AvatarMUI';

//import { Outlet } from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';


function OmaTabsMUI({ nimet }) {

    const [value, setValue] = useState(4);

    const muuta = (e, value) => {
        setValue(value);
    }

    return (
        <Box>
            <AppBar position='static'>
                <Tabs value={value} onChange={muuta} textColor='inherit' variant='standard'>
                    <AvatarMUI />
                    <Tab label='Nimet' icon={<FastfoodIcon />} component={Link} to='/' />
                    <Tab label='Omat kirjat' icon={<FastfoodIcon />} component={Link} to='omatkirjat' />
                    <Tab label='Lisää kirja' icon={<FastfoodIcon />} component={Link} to='lisaakirja' />
                    <Tab label='Kirjat' icon={<FastfoodIcon />} component={Link} to='kirjat' />
                    <Tab label='Ajastin' icon={<FastfoodIcon />} component={Link} to='timer' />
                    <Tab label='Avatar' icon={<FastfoodIcon />} component={Link} to='avatar'></Tab>


                </Tabs>
            </AppBar>
            <Outlet />

            {/*     {value === 0 && < Ajopaivakirja ajopaivakirja={ajopaivakirja} tekija={tekija} otsikko={otsikko} />}
            {value === 1 && < Arvosanalomake />}
            {value === 2 && < Reseptit />}
            {value === 3 && < OmalomakeMUI />}
            {value === 4 && < OmaMenuMUI />}

            {value === 5 && < OmakorttiMUI data={data} />}
    */}

        </Box>
    );
}

export default OmaTabsMUI;