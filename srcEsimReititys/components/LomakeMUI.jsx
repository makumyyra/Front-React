import { useState } from 'react';
import { Paper, Box, TextField, InputLabel, Button, Typography, MenuItem } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import AttachmentIcon from '@mui/icons-material/Attachment';

import { Link } from 'react-router-dom';

const lajit = [
  {
    arvo: 1,
    teksti: 'Kissa'
  },
  {
    arvo: 2,
    teksti: 'Koira'
  },
  {
    arvo: 3,
    teksti: 'Lintu'
  },
];

function LomakeMUI() {

  const [elain, setValues] = useState({ nimi: '', laji: '', kuva: [], kuvaus: '' });

  const muuta = (e) => {
    setValues({
      ...elain,
      [e.target.name]: e.target.value
    });
  }

  const muutaKuva = (e) => {
    setValues({
      ...elain,
      [e.target.name]: e.target.files[0]
    });
  }

  const lisaaElain = (e) => {
    setValues({ nimi: '', laji: '', kuva: [], kuvaus: '' })
  }

  let kuvaNimi = '';
  if (elain.kuva !== null) {
    kuvaNimi = elain.kuva.name;
  }

  return (
    <Paper>
      <Box component='form'
        sx={{
          '& .MuiTextField-root': { marginBottom: 2 },
          padding: 2
        }}
      >
        <TextField fullWidth label='Nimi' name='nimi'
          value={elain.nimi} onChange={muuta} required />

        <TextField fullWidth label='Kuvaus' name='kuvaus'
          value={elain.kuvaus} onChange={muuta} required />

        <TextField fullWidth label='Laji' name='laji' select
          value={elain.laji} onChange={muuta} required>
          {
            lajit.map(laji => {
              return (
                <MenuItem key={laji.arvo} value={laji.arvo}>
                  {laji.teksti}
                </MenuItem>
              )
            })
          }
        </TextField>

        <input accept='image/*' name='kuva' type='file' id='kuva'
          onChange={muutaKuva} hidden />

        <InputLabel htmlFor='kuva'>
          <Typography display='inline'>Kuva</Typography>
          <Button component='span' startIcon={<AttachmentIcon />} />
          <Typography display='inline'>{kuvaNimi}</Typography>
        </InputLabel>

        <Box sx={{ textAlign: 'center' }}>
          <Button onClick={lisaaElain} variant='contained'
            sx={{ marginRight: 3 }} startIcon={<CreateIcon />}> Lisää</Button>
          <Button variant='contained' color='secondary' startIcon={<HomeIcon />} component={Link} to='/'> Etusivulle</Button>
        </Box>
      </Box>
    </Paper>
  );
}

export default LomakeMUI;
