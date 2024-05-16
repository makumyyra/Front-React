
import { Container, Paper, Typography, Grid, TextField, InputLabel, FormControlLabel, Checkbox, Button } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addKirja } from './kirjasto';



function LisaaKirja() {

    const navigate = useNavigate();

    const [kirja, setKirja] = useState(
        {
            id: '',
            otsikko: '',
            kirjailija: '',
            vuosi: '',
            sivuja: '',
            picture: []
        }
    );

    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setKirja(
            {
                ...kirja,
                [e.target.name]: e.target.value
            }
        )
        setViesti('');
    }

    const muutaKuva = (e) => {
        setValues({
            ...kirja,
            kuva: e.target.files[0]
        });

        setViesti('');
    }

    const validateForm = () => {
        if (!kirja.otsikko || !kirja.kirjailija) {
            setViesti('Kirjalla pitää olla nimi ja tekijä');
            return false;
        }
        if (!Number.isInteger(Number(kirja.vuosi)) || !Number.isInteger(Number(kirja.sivuja))) {
            setViesti('Julkaisuvuoden ja sivumäärän tulee olla lukuja');
            return false;
        }
        return true;
    };

    const lisaa = async () => {
        if (validateForm()) {
            // Lisätään kantaan
            const formData = new FormData();

            setKirja(
                {
                    id: '',
                    otsikko: '',
                    kirjailija: '',
                    vuosi: '',
                    sivuja: '',
                    picture: [],
                }
            )
            setViesti('Lisättiin');
        }
    }


    let kuvaNimi = '';
    if (kirja.picture !== null) {
        kuvaNimi = kirja.picture.name;
    }

    return (
        <Container component="main" maxWidth="sm">
            <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
                <Typography component="h1" variant="h5" gutterBottom>
                    Lisää Kirja
                </Typography>
                <form noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                name="otsikko"
                                variant="outlined"
                                fullWidth
                                label="Otsikko"
                                value={kirja.otsikko}
                                onChange={muuta}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="kirjailija"
                                variant="outlined"
                                fullWidth
                                label="Kirjailija"
                                value={kirja.kirjailija}
                                onChange={muuta}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="vuosi"
                                variant="outlined"
                                fullWidth
                                label="Julkaisuvuosi"
                                value={kirja.vuosi}
                                onChange={muuta}

                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="sivuja"
                                variant="outlined"
                                fullWidth
                                label="Sivuja"
                                value={kirja.sivuja}
                                onChange={muuta}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <input
                                accept="image/*"
                                name="picture"
                                id="kuva"
                                type="file"
                                onChange={(e) => muutaKuva(e)}
                                hidden
                            />
                            <InputLabel htmlFor="kuva">
                                <Typography sx={{ display: 'inline' }}>Kuva</Typography>
                                <Button component="span">
                                    <AttachmentIcon />
                                </Button>
                                <Typography sx={{ display: 'inline' }}>{kuvaNimi}</Typography>
                            </InputLabel>
                        </Grid>

                        <Grid item xs={12}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick={lisaa}
                            >
                                Lisää
                            </Button>
                        </Grid>
                    </Grid>
                </form>
                {viesti && <Typography color="error" variant="body2">{viesti}</Typography>}
            </Paper>
        </Container>
    );



    {/*
    return (
        <>
            <form>
                <label>Otsikko
                    <input type='text' name='otsikko' value={kirja.otsikko} onChange={(e) => muuta(e)} /><br />
                </label>
                <label>Kirjailija
                    <input type='text' name='kirjailija' value={kirja.kirjailija} onChange={(e) => muuta(e)} /><br />
                </label>
                <label>Julkaisuvuosi
                    <input type='text' name='vuosi' value={kirja.vuosi} onChange={(e) => muuta(e)} /><br />
                </label>
                <label>Sivuja
                    <input type='text' name='sivuja' value={kirja.sivuja} onChange={(e) => muuta(e)} /><br />
                </label>
                <label>Kuva
                    <input type='text' name='kuva' value={kirja.picture} onChange={(e) => muuta(e)} /><br />
                </label>

                <input type='button' value='Lisää' onClick={() => lisaa()} />
            </form>
            {viesti}
        </>
    );
    */}
}

export default LisaaKirja;
