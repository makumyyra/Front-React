import { Grid, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Switch } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';

function KorttiMUI({ kuvat }) {

    const [lomake, setLomake] = useState({ recommend: false })

    const addTo = (e) => {
        setLomake({
            ...lomake,
            [e.target.name]: e.target.value
        });
    }

    return (
        <Grid container spacing={2} sx={{ marginTop: 3, marginLeft: 1 }}>
            {
                kuvat.map(item => {
                    return (
                        <Grid item key={item.id}>
                            <Card sx={{ width: 210, margin: 2 }}>

                                <CardContent>
                                    {
                                        item.picture ?
                                            <CardMedia sx={{ height: 100, width: 180 }}
                                                component="img"
                                                image={item.picture}
                                                alt={item.otsikko} />
                                            :
                                            <Typography sx={{ height: 200, width: 250 }}>Ei kuvaa</Typography>
                                    }
                                    <CardHeader title={item.otsikko}
                                    />
                                    <Typography gutterBottom>Lisää omiin kirjoihin
                                        <Switch
                                            checked={lomake.recommend}
                                            onChange={(e) => addTo(e)}
                                            value='checked'
                                        />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default KorttiMUI;