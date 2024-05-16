import { ThemeProvider, createTheme } from "@mui/material/styles"
import { CssBaseline, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { createBrowserRouter, RouterProvider, useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import AvatarMUI from "./muicomponents/AvatarMUI";
import Nimet from "./components/Nimet";
import NimiHaku from "./components/NimiHaku";
import KorttiMUI from "./muicomponents/KorttiMUI";
import OmaTabsMUI from "./muinavi/OmaMenuMUI";
import OmaMenuMUI from "./muinavi/OmaMenuMUI";


import Nimilomake from "./components/Nimilomake";


const lukijat = [
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

const kuvat = [
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
    element: <OmaTabsMUI kuvat={kuvat} nimilista={lukijat} />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <KorttiMUI kuvat={kuvat} />
      },
      {
        path: 'kortti',
        element: <Nimet nimilista={lukijat} />
      },
      {
        path: 'nimet',
        element: <NimiHaku nimilista={lukijat} />
      },

    ]
  },
]);




function App() {

  return (
    <Box>
      <CssBaseline />
      {/* <h3>Lukijat</h3>
      <Nimet nimilista={lukijat} />
      <h3>Nimihaku</h3>
      <NimiHaku nimilista={lukijat} />
      <h3>Nimilomake</h3>
      <Nimilomake /> <OmaTabsMUI />
      <KorttiMUI kuvat={kuvat} />
      <RouterProvider router={router} />      
      <OmaDrawerMUI />
      <OmaMenuMUI />
      <OmaTabsMUI />
      <AvatarMUI />*/}
      <RouterProvider router={router} />




    </Box>)
}

export default App;
