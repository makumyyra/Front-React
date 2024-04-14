import { Grid, Card, CardHeader, CardContent, CardMedia, CardActions, Button, Typography } from '@mui/material';

import { Link } from 'react-router-dom';

const kuvaTyyli = {
  height: 200,
  borderStyle: 'solid',
  borderWidth: '1px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function ListaMUI({ tiedot }) {

  return (
    <Grid container spacing={4} sx={{ margin: 1 }}>
      {
        tiedot.map(tieto => {
          return (
            <Grid item key={tieto.id}>
              <Card sx={{ maxWidth: 300 }}>

                <CardHeader
                  title={tieto.nimi} />


                { tieto.kuva ?
                  <CardMedia
                    component='img'
                    height='200'
                    image={'/kuvia/' + tieto.kuva}
                    alt={tieto.kuvaus} />
                    :
                <Typography variant='h6' style={kuvaTyyli}>Ei kuvaa</Typography>
                }

                <CardContent>
                  {
                    tieto.laji ?
                      <Typography>{tieto.laji}</Typography>
                      :
                      <Typography>Lajitietoa ei ole</Typography>
                  }
                  <Typography>{tieto.kuvaus}</Typography>
                </CardContent>

                <CardActions>
                  <Button component={Link}
                    to={tieto.nimi + '/' + tieto.lisatieto}>Lisätietoa</Button>
                </CardActions>
              </Card>
            </Grid>
          )
        })
      }
    </Grid>
  )

}

export default ListaMUI;
