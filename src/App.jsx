import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Nimilomake from './components/Nimilomake';
import NimiHaku from './components/NimiHaku';
import Nimet from './components/Nimet';
import OmaTabsMUI from './muinavi/OmaTabsMUI';
import KirjaMUI from "./muicomponents/KirjaMUI";
import Timer from "./muicomponents/TimerMUI";
import OmatKirjatMUI from "./muicomponents/OmatKirjatMUI";
import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

import { pink, blue, green, yellow, amber } from '@mui/material/colors';
import AvatarMUI from "./muicomponents/AvatarMUI";
import LisaaKirja from "./components/LisaaKirja";

const nimet = [
  {
    id: 1,
    nimi: "Alma",
    ika: 10,
    parasKirja: "Risto Räppääjä"
  },
  {
    id: 2,
    nimi: "Suvi",
    ika: 41,
    parasKirja: "The Smoke Jumper"
  },
  {
    id: 3,
    nimi: "Teemu",
    ika: 42,
    parasKirja: "Kolme kitarasointua"
  },
  {
    id: 4,
    nimi: "Mehiläinen",
    ika: 1,
    parasKirja: "Kasvinhoitaja",
  }
];

const kirjat = [
  {
    id: 1, otsikko: 'Risto Räppääjä ja viimeinen tötterö', sivuja: '96',
    picture: 'kuvat/rr1.jpg', suosikki: false
  },
  {
    id: 2, otsikko: 'RR2', sivuja: '102',
    picture: 'kuvat/rr2.jpg', suosikki: true
  },
  {
    id: 3, otsikko: 'RR3', sivuja: '115',
    picture: 'kuvat/rr3.jpg', suosikki: true
  },
  {
    id: 4, otsikko: 'Heppa', sivuja: '235',
    picture: 'kuvat/hevoset1.jpg', suosikki: false
  },
  {
    id: 5, otsikko: 'Chinchilla', sivuja: '74',
    picture: 'kuvat/chinchilla.jpg', suosikki: false
  },
]


const theme = createTheme({
  palette: {
    //primary: { main: pink[600], contrastText: '#FFFFFF' },
    //secondary: { main: amber[400], contrastText: '#FFFFFF' },
    //text: { primary: green[600], secondary: blue[600] },
  }, // Värimaailma
  typography: {
    //fontFamily: "'Dancing Script', cursive",
  }, // Fontti
});

function Error() {
  let error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return (
      <Box>
        {error.status}
        {error.data}
        <Link to='/'> Etusivulle</Link>
      </Box>
    );
  }
  return (
    <Box>
      {error.message}
      <Link to='/'>Etusivulle</Link>
    </Box>
  );
}

const router = createBrowserRouter([
  {
    element: <OmaTabsMUI nimet={nimet} />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Nimet nimilista={nimet} />
      },
      {
        path: 'nimilomake',
        element: <Nimilomake />,
      },

      {
        path: 'kirjat',
        element: <KirjaMUI kirjat={kirjat} /> //setSuosikit={setSuosikit} 
      },
      {
        path: 'timer',
        element: <Timer />
      },
      {
        path: 'lisaakirja',
        element: <LisaaKirja />
      },
      {
        path: 'avatar',
        element: <AvatarMUI />
      }


    ]
  },
]);


function App() {

  //  const [suosikit, setSuosikit] = useState([]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />


        {/*  <MatkalomakeMUI />
      <OmakorttiMUI data={data} />
      <DrawerMUI />
      <OmasliderMUI />
      <OmaTabsMUI ajopaivakirja={ajopvk} tekija={tekija} otsikko={otsikko} data={data} />*/}
        <RouterProvider router={router} />
      </Box>
    </ThemeProvider >
  );
}

export default App;