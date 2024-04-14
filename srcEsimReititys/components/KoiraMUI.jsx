import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

function KoiraMUI() {
  const [kuva, setKuva] = useState('');
  const [virhe, setVirhe] = useState('Haetaan ...');

  const fetchUrl = async () => {
    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const json = await response.json();

      setKuva(json.message);
      setVirhe('');
    } catch (error) {
      setVirhe('Tietoja ei ole saatavilla');
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  if (virhe.length > 0) {
    return (<div>{virhe}</div>)
  }

  return (
    <Box
      component="img"
      sx={{ height: 200, margin: 3 }}
      alt="Koiran kuva"
      src={kuva}
    />
  );
}

export default KoiraMUI;
