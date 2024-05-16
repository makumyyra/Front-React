// Talletetaan uusi käyttäjä

import { useState } from 'react';

function Nimilomake() {
    const [nimitieto, setNimitieto] = useState(
        {
            nimi: '',
            ika: -1,
            parasKirja: ''
        }
    );

    const [viesti, setViesti] = useState('');

    const muuta = (e) => {
        setNimitieto(
            {
                ...nimitieto,
                [e.target.name]: e.target.value
            }
        )
        setViesti('');
    }

    const lisaa = () => {

        if (nimitieto.nimi !== '' &&
            nimitieto.ika > -1
        ) {
            setNimitieto(
                {
                    nimi: '',
                    ika: -1,
                    parasKirja: ''
                }
            )
        } else {
            setViesti('Kerro ainakin nimi ja ikä.');
        }
        setViesti('Lisätty nimilistaan!');
    }

    return (
        <>
            <form>
                <label>Nimi: &nbsp;
                    <input type="text" name='nimi' value={nimitieto.nimi} onChange={(e) => muuta(e)} />
                </label>
                <br />
                <label>Ikä: &nbsp;
                    <input type="text" name='ika' value={nimitieto.ika} onChange={(e) => muuta(e)} />
                </label>
                <br />
                <label>Paras kirja: &nbsp;
                    <input type="text" name='parasKirja' value={nimitieto.parasKirja} onChange={(e) => muuta(e)} />
                </label>
                <br />
                <input type='button' value='Lisää' onClick={() => lisaa()} />
            </form>
            {viesti}

        </>
    );



}

export default Nimilomake;