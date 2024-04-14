import { Box } from '@mui/material';
import ElainMUI from './components/ElainMUI';
import KoiraMUI from './components/KoiraMUI';
import ListaMUI from './components/ListaMUI';
import LomakeMUI from './components/LomakeMUI';
//import DrawerMUI from './MUI/DrawerMUI';
//import TabsMUI from './MUI/TabsMUI';
import MenuMUI from './MUI/MenuMUI';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import blueGrey from '@mui/material/colors/blueGrey';

import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse, Link } from 'react-router-dom';

const elaintaulukko = [
  {
    id: 1,
    nimi: 'Hulk',
    laji: 'kissa',
    kuva: 'kissa.jpg',
    kuvaus: 'Kissa makaa matolla ....',
    lisatieto: 'Kissa eli kesykissa tai kotikissa (Felis catus,[1][2] aiemmin Felis silvestris catus) on afrikanvillikissasta (Felis lybica) polveutuva ja petoeläinten (Carnivora) lahkon kissaeläinten (Felidae) heimoon kuuluva kesy nisäkäslaji. Kissat ovat suosittuja lemmikkieläimiä, ja etenkin maaseudulla ne ovat aina olleet hyödyllisiä hiirten ja muiden tuholaisten pyydystäjinä.'
  },
  {
    id: 2,
    nimi: 'Tintti',
    kuva: 'tintti.png',
    kuvaus: 'Kun lintu ulkona odottaa ....',
    lisatieto: 'Talitiainen (Parus major) on Euroopassa ja Aasiassa laajalle levinnyt tiainen. Sitä tavataan yleisenä ihmisten asuinpiirien lähellä, talvella siemeniä ja jyviä sisältävien lintulautojen tai ruokintapaikkojen ansiosta, kesällä linnunpönttöjen. Talitiaisen kansanomaisempi kutsumanimi on talitintti.'
  }
]

const theme = createTheme( {
  palette: {
    primary: { main: blueGrey[300], contrastText: '#FFFFFF' },
    secondary: { main: blueGrey[700], contrastText: '#FFFFFF' },
    text: { primary: blueGrey[700], secondary: blueGrey[900], contrastText: '#FFFFFF' },
    background: { default: '#FFFFFF' }
  },
  typography: {
    fontFamily: "'Tektur', 'cursive'",
  },
});

function Error() {
  let error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (<Box component='h3'>{error.status} {error.data} <Link to='/'>Etusivulle</Link></Box>);
  }

  return (<Box component='h3'>{error.message} <Link to='/'>Etusivulle</Link></Box>);
}

const router = createBrowserRouter([
  {
    element: <MenuMUI />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <KoiraMUI />,
      },
      {
        path: 'lisaa',
        element: <LomakeMUI />,
      },
      {
        path: 'listaa',
        element: <ListaMUI tiedot={elaintaulukko} />,
      },
      {
        path: 'listaa/:nimi/:lisatieto',
        element: <ElainMUI />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App;
