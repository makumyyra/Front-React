import { Grid, Card, CardHeader, CardContent, CardMedia, CardActions, IconButton, Typography, Switch, Slide, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { AccountCircle } from '@mui/icons-material';
import { useEffect, useState } from 'react';
import TimerMUI from './TimerMUI';
import { getKirjat } from '../components/kirjasto';


//function KirjaMUI({ kirjat, omatKirjat }) {
function KirjaMUI() {

    const [kirjat, setKirjat] = useState([]);

    const haeKaikkiKirjat = async () => {
        try {
            const response = await getKirjat();
            setKirjat(response.data);

        } catch (error) {
            setKirjat([]);
        }
    }

    useEffect(() => {
        haeKaikkiKirjat();
    }, []
    );

    const [suosikit, setSuosikit] = useState(kirjat.map(() => false)); //jotta kaikki ei mene päälle yhtä aikaa niin pysähdytään erikseen joka korttiin
    //tällä hetkellä suositus=false

    // Laitetaan erikseen päälle/pois
    const vaihdaSuositus = (index) => {
        const suosikkiLista = [...suosikit]; //kaikki kirjat
        suosikkiLista[index] = !suosikkiLista[index]; //yksi kirja suosikkiLista-listasta; vaihdetaan suositus päinvastaiseksi
        setSuosikit(suosikkiLista); //asettaa valinnan takaisin listaan
        if (suosikkiLista == true) {
            omatKirjat(aiemmat => [...kirjat[index], ...aiemmat]);
        }
    };
    //valinnan voi uusia koska vain

    // Function to handle switch state change
    //Apua haettu ChatGPT 15.4. klo 18:05, koska itse en saanut tätä toimimaan kunnolla -->
    const handleSwitchChange = (index, newState) => {
        setBookStates(prevStates => {
            const newStates = [...prevStates];
            newStates[index].switchState = newState;
            return newStates;
        });

        // Päivitä suosikit
        if (newState) {
            setSuosikit(prevFavorites => [...prevFavorites, kirjat[index]]);
        } else {
            setSuosikit(prevFavorites => prevFavorites.filter(book => book.id !== kirjat[index].id));
            //poista kirja, jossa kytkimen tilaa vastaava id
        }
    };
    /// <-- ChatGPT


    {/*const [lomake, setLomake] = useState({ recommend: false })

    const lisaaOmiin = (e) => {
        const kirja = {
            id,
            otsikko,
            sivuja,
            picture
        }

        setKirja([...kirjat, kirja]);
    }*/ }


    const timer = <TimerMUI />;

    const [totalTime, setTotalTime] = useState(0);

    const muokkaaAikaa = (e) => {
        setTotalTime(alku => alku + kesto);
    };

    return (
        <div>
            <typography>Total Time: {formatTotalTime(totalTime)}</typography>

            <Grid container spacing={2} sx={{ marginTop: 3, marginLeft: 1 }}>
                {kirjat.map((kirja, index) => {
                    return (<Slide
                        direction="down"
                        in={true}
                        mountOnEnter
                        unmountOnExit
                        timeout={600 * index}>
                        <Grid item key={kirja.id}>
                            <Card sx={{ width: 200, margin: 2 }}>
                                <CardContent>
                                    {kirja.picture ?
                                        <CardMedia sx={{ height: 'auto', width: 'auto', maxWidth: 180 }}
                                            component="img"
                                            image={'http://localhost:8080/download/' + kirja.picture}
                                            alt={kirja.otsikko} />
                                        :
                                        <Typography sx={{ height: 200, width: 250 }}>Ei kuvaa</Typography>
                                    }
                                    <CardHeader title={kirja.otsikko} />
                                    <CardContent>
                                        <Typography>Tekijä:<br />{kirja.kirjailija}</Typography>
                                        <Typography>Vuosi: {kirja.vuosi}</Typography>
                                    </CardContent>
                                    <Typography gutterBottom>Lisää omiin kirjoihin
                                        <Switch
                                            checked={suosikit[index]}
                                            onChange={() => vaihdaSuositus(index)}
                                            value='checked'
                                        />
                                        <TimerMUI onTimeChange={muokkaaAikaa} />
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Slide>);
                })}
            </Grid>
        </div>
    );

    function formatTotalTime(totalTime) {
        const hours = Math.floor(totalTime / 3600);
        const minutes = Math.floor((totalTime % 3600) / 60);
        const seconds = totalTime % 60;
        return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;


    }


}

export default KirjaMUI;
