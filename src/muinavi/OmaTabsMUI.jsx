import { useState } from 'react';
import { Box, AppBar, Tabs, Tab } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import EditIcon from '@mui/icons-material/Edit';
import MenuIcon from '@mui/icons-material/Menu';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import Ajopaivakirja from '../components/Ajopaivakirja';
import Reseptit from '../components/Reseptit';
import OmalomakeMUI from '../muicomponents/OmalomakeMUI';
import Arvosanalomake from '../components/Arvosanalomake';
import OmakorttiMUI from '../muicomponents/OmakorttiMUI';
import OmaDrawerMUI from './OmaDrawerMUI';
import OmaMenuMUI from './OmaMenuMUI';


function OmaTabsMUI({ ajopaivakirja, tekija, otsikko, data }) {

    const [value, setValue] = useState(4);

    const muuta = (e, value) => {
        setValue(value);
    }

    return (
        <Box>
            <AppBar position='static'>
                <Tabs value={value} onChange={muuta} textColor='inherit' variant='standard'>
                    <Tab label='Ajopäiväkirja (Tehtävä 2)' icon={<DirectionsCarIcon />} />
                    <Tab label='Arviointi (Tehtävä 3)' icon={<EditIcon />} />
                    <Tab label='Ruokahaku (Tehtävä 4)' icon={<FastfoodIcon />} />
                    <Tab label='Lomake (Tehtävä 5)' icon={<EditIcon />}></Tab>
                    <Tab label='Menu (Tehtävä 6)' icon={<MenuIcon />}></Tab>
                </Tabs>
            </AppBar>




            {value === 0 && < Ajopaivakirja ajopaivakirja={ajopaivakirja} tekija={tekija} otsikko={otsikko} />}
            {value === 1 && < Arvosanalomake />}
            {value === 2 && < Reseptit />}
            {value === 3 && < OmalomakeMUI />}
            {value === 4 && < OmaMenuMUI />}

            {value === 5 && < OmakorttiMUI data={data} />}
        </Box>

    )
}

export default OmaTabsMUI;