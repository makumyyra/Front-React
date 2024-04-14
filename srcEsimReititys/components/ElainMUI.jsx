import { Card, CardHeader, CardContent, CardActions, Typography } from '@mui/material';

import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

function ElainMUI() {
  let { nimi } = useParams();
  let { lisatieto } = useParams();

  return (
    <Card sx={{ maxWidth: 500, margin: 1 }}>
      <CardHeader
        title={nimi} />

      <CardContent>
        <Typography variant='p'>{lisatieto}</Typography>
      </CardContent>

      <CardActions>
        <Link to='/listaa'>Takaisin listaukseen</Link>
      </CardActions>
    </Card>
  )
}

export default ElainMUI;
