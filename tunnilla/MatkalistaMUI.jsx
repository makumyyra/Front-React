import { Box, Grid, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function MatkalistaMUI({ matkat }) {

  return (
    <Grid container spacing={2} sx={{ marginTop: 1 }}>
      {
        matkat.map(matka => {
          return (
            <Grid item key={matka.id}>
              <Card sx={{ width: 230 }}>
              
              </Card> 
            </Grid>
          )
        })
      }
    </Grid>
  )
}

export default MatkalistaMUI;
