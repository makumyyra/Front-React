import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/material';
import Nimilomake from './components/Nimilomake';
import NimiHaku from './components/NimiHaku';
import Nimet from './components/Nimet';
import OmaTabsMUI from './muinavi/OmaTabsMUI';
import KirjaMUI from "./muicomponents/KirjaMUI";
import Timer from "./muicomponents/TimerMUI";
import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";

import { pink, blue, green, yellow, amber } from '@mui/material/colors';


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
    picture: 'kuvat/rr1.jpg'
  },
  {
    id: 2, otsikko: 'RR2', sivuja: '102',
    picture: 'kuvat/rr2.jpg'
  },
  {
    id: 3, otsikko: 'RR3', sivuja: '115',
    picture: 'kuvat/rr3.jpg'
  },
  {
    id: 4, otsikko: 'Heppa', sivuja: '235',
    picture: 'kuvat/hevoset1.jpg'
  },
  {
    id: 5, otsikko: 'Chinchilla', sivuja: '74',
    picture: 'kuvat/chinchilla.jpg'
  },
]

const data = [
  {
    id: 1, otsikko: 'Assi', paiva: '2024-02-29',
    picture: 'kuvia/assi.jpg'
  },
  {
    id: 2, otsikko: 'Myynti', paiva: '2024-03-01',
    picture: 'kuvia/myynti.jpg'
  },
  {
    id: 3, otsikko: 'Tiko', paiva: '2024-06-24',
    picture: 'kuvia/tiko.jpg'
  },
  {
    id: 4, otsikko: 'Bite', paiva: '2024-05-31',
    picture: 'kuvia/yleinen1.jpg'
  },
  {
    id: 5, otsikko: 'Muu', paiva: '2024-02-29',
    picture: 'kuvia/yleinen2.jpg'
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
    element: <OmaTabsMUI data={data} />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Nimilomake />
      },
      {
        path: 'nimet',
        element: <Nimet nimet={nimet} />,
      },
      {
        path: 'kirjat',
        element: <KirjaMUI kirjat={kirjat} />
      },
      {
        path: 'timer',
        element: <Timer />
      }


    ]
  },
]);




function App() {
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