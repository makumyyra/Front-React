import { Grid, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccountCircle } from '@mui/icons-material';

function OmakorttiMUI({ data }) {

    return (
        <Grid container spacing={2} sx={{ marginTop: 3, marginLeft: 1 }}>
            {
                data.map(item => {
                    return (
                        <Grid item key={item.id}>
                            <Card sx={{ width: 210, margin: 2 }}>
                                <CardActions>
                                    <IconButton color='primary' sx={{ fontSize: '16px' }} ><AccountCircle /> Näytä</IconButton>
                                    <IconButton color='secondary' sx={{ fontSize: '16px' }}><DeleteIcon /> Poista</IconButton>
                                </CardActions>
                                <CardHeader title={item.otsikko}
                                    subheader={item.paiva} />
                                <CardContent>
                                    {
                                        item.picture ?
                                            <CardMedia sx={{ height: 100, width: 180 }}
                                                component="img"
                                                image={item.picture}
                                                alt={item.otsikko} />
                                            :
                                            <Typography sx={{ height: 100, width: 200 }}>Ei kuvaa</Typography>
                                    }
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default OmakorttiMUI;