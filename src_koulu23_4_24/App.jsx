//import MatkakorttiMUI from './components/MatkakorttiMUI';
//import MatkalistaMUI from './components/MatkalistaMUI';
//import MatkalomakeMUI from './components/MatkalomakeMUI';
import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/material';
import MatkakorttiMUI from './muicomponents/MatkakorttiMUI';
import MatkalistaMUI from './muicomponents/MatkalistaMUI';
import MatkalomakeMUI from './muicomponents/MatkalomakeMUI';
import OmakorttiMUI from './muicomponents/OmakorttiMUI';
import TabMUI from './muinavi/TabMUI';
import DrawerMUI from './muinavi/DrawerMUI';
import OmasliderMUI from './muicomponents/OmasliderMUI'
import Ajopaivakirja from './components/Ajopaivakirja';
import Arvosanalomake from './components/Arvosanalomake';
import Reseptit from './components/Reseptit';
import OmaTabsMUI from './muinavi/OmaTabsMUI';
import OmaMenuMUI from "./muinavi/OmaMenuMUI";
import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import Kappale from './components/Kappale'
import Elokuvat from "./components/Elokuvat";


import { pink, blue, green, yellow, amber } from '@mui/material/colors';


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





const mat = [
  {
    id: 1,
    otsikko: 'Lomalla',
    paiva: '26.5.2024',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 10',
    kuvaus: 'Lomalla Lohjalla',
    kuva: 'kuvia/tammi.png'
  },
  {
    id: 2,
    otsikko: 'Mökillä',
    paiva: '8.6.2024',
    paikka: 'Savonlinna',
    saa: 'Aurinkoinen, 21',
    kuvaus: 'Mökillä Itä-Suomessa',
    kuva: 'kuvia/lumme.png'
  },
  {
    id: 3,
    otsikko: 'Sukuloimassa',
    paiva: '20.5.2024',
    paikka: 'Vantaa',
    saa: 'Pilvinen, 9',
    kuvaus: 'Kahvihetki',
    kuva: 'kuvia/kakku.jpg'
  }
];

const ajopvk = [{
  rekisterinro: "XYZ-123",
  laatija: "Risto Reipas",
  alku: {
    lukema: "32500",
    lahtoaika: "13:30",
    paiva: "2023-01-27",
    paikka: "Ratapihantie 13, Helsinki",
  },
  loppu: {
    lukema: "32510",
    loppuaika: "13:50",
    paiva: "2023-06-27",
    paikka: "Hietakummuntie 1, Helsinki",
  }
}];

let tekija = 'Suvi Sammakkosuo';
let otsikko = 'Ajopäiväkirja';



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

/*const router = createBrowserRouter([
  {
    element: <OmaTabsMUI ajopaivakirja={ajopvk} tekija={tekija} otsikko={otsikko} data={data} />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Typography>Ajopäiväkirja</Typography>
      },
      {
        path: 'arviointi',
        element: <Arvosanalomake />
      },
      {
        path: 'resepti',
        element: <Reseptit />,
      },
      {
        path: 'lomake',
        element: <Arvosanalomake />,
      },
      {
        path: 'menu',
        element: <OmaMenuMUI data={data} />,
        errorElement: <Error />,
        children: [
          {
            path: 'kappale',
            element: <Kappale />,
          },
          {
            path: 'elokuvat',
            element: <Elokuvat />,
          },
          {
            path: 'kortit',
            element: <OmakorttiMUI data={data} />,
          },

        ]
      }

    ]
  },
]);
*/
const router = createBrowserRouter([
  {
    element: <TabMUI matkat={mat} />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <MatkalistaMUI matkat={mat} />
      },
      {
        path: 'lisaa',
        element: <MatkalomakeMUI />
      }
    ]

  },
]);





function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />

        {/*<MatkalomakeMUI />
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