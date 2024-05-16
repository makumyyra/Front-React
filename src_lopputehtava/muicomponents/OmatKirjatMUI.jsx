import { useState } from "react"
import { Grid, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Switch, Slide, Stack } from '@mui/material';
import KirjaMUI from "./KirjaMUI";

function OmatKirjatMUI({ omatkirjat }) {

    const [omatKirjat, setOmatKirjat] = useState([

        {
            id: 1, otsikko: 'Tämä tulee omakirjaMUISTA', sivuja: '96',
            picture: 'kirjat/rr1.jpg'
        },
        {
            id: 2, otsikko: 'RR2', sivuja: '102',
            picture: 'kirjat/rr2.jpg'
        },

    ])

    const lisaaKirja = (tykattyKirja) => {
        const kirja = {
            id: self.crypto.randomUUID(),
            otsikko,
            sivuja,
            picture
        }
        setOmatKirjat([tykattyKirja, ...omatKirjat]);

    }

    const kirjaMui = <KirjaMUI />; //miten tästä saa suosikit?


    return (

        <Grid container spacing={2} sx={{ marginTop: 3, marginLeft: 1 }}>
            {omatKirjat.map((kirja, index) => {
                return (<Slide
                    direction="down"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                    timeout={800 * index}>
                    <Grid item key={kirja.id}>
                        <Card sx={{ width: 200, margin: 2 }}>
                            <CardContent>
                                {kirja.picture ?
                                    <CardMedia sx={{ height: 'auto', width: 'auto', maxWidth: 180 }}
                                        component="img"
                                        image={kirja.picture}
                                        alt={kirja.otsikko} />
                                    :
                                    <Typography sx={{ height: 200, width: 250 }}>Ei kirjaa</Typography>
                                }
                                <CardHeader title={kirja.otsikko} />
                                <Typography gutterBottom>Lisää omiin kirjoihin


                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>);
            })}
        </Grid>

    );
}


export default OmatKirjatMUI;