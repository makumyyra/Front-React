import { Grid, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Switch, Slide, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccountCircle } from '@mui/icons-material';
import { useState } from 'react';
import TimerMUI from './TimerMUI';


function KirjaMUI({ kirjat }) {

    // Create state for managing the recommendation status of each item
    const [suosikit, setSuosikit] = useState(kirjat.map(() => false)); //jotta kaikki ei mene päälle yhtä aikaa niin pysähdytään erikseen joka korttiin

    // Laitetaan erikseen päälle/pois
    const vaihdaSuositus = (index) => {
        const suosikki = [...suosikit];
        suosikki[index] = !suosikki[index]; //vaihdetaan suositus päinvastaiseksi
        setSuosikit(suosikki);
    };
    //valinnan voi uusia koska vain

    const omatKirjat = (e, suositus) => {
        console.log(suositus)
    }


    {/*const [lomake, setLomake] = useState({ recommend: false })

    --> APP.jsx
    const lisaaOmiin = (e) => {
        const book = {
            id,
            otsikko,
            sivuja,
            picture
        }

        setKirja([...kirjat, kirja]);
    } */}


    const timer = <TimerMUI />;

    return (

        <Grid container spacing={2} sx={{ marginTop: 3, marginLeft: 1 }}>
            {kirjat.map((kuva, index) => {
                return (<Slide
                    direction="down"
                    in={true}
                    mountOnEnter
                    unmountOnExit
                    timeout={800 * index}>
                    <Grid item key={kuva.id}>
                        <Card sx={{ width: 200, margin: 2 }}>
                            <CardContent>
                                {kuva.picture ?
                                    <CardMedia sx={{ height: 'auto', width: 'auto', maxWidth: 180 }}
                                        component="img"
                                        image={kuva.picture}
                                        alt={kuva.otsikko} />
                                    :
                                    <Typography sx={{ height: 200, width: 250 }}>Ei kuvaa</Typography>
                                }
                                <CardHeader title={kuva.otsikko} />
                                <Typography gutterBottom>Lisää omiin kirjoihin
                                    <Switch
                                        checked={suosikit[index]}
                                        onChange={() => vaihdaSuositus(index)}
                                        value='checked'
                                    />
                                    <TimerMUI />
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Slide>);
            })}
        </Grid>

    );
}

export default KirjaMUI;
