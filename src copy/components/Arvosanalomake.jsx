import { useState } from 'react';

function Arvosanalomake() {
    const [arvosana, setArvosana] = useState(
        {
            nimi: '',
            // paiva: new Date(),
            arvo: 0
        }
    );

    const [viesti, setViesti] = useState('');


    const muuta = (e) => {
        setArvosana(
            {
                ...arvosana,
                [e.target.name]: e.target.value
            }
        )
        setViesti('');
    }

    const lisaa = () => {

        if (
            nimi !== '' &&
            arvo > 0 && arvo <= 5
        ) {

            setArvosana(
                {
                    nimi: '',
                    //paiva: new Date,
                    arvo: 0
                }
            )
        } else {
            setViesti('Kaikissa kentissä pitää olla arvot');
        }

        setViesti('Talletettiin');
    }

    return (
        <>
            <form>
                <label>Nimi:&nbsp;
                    <input type="text" name='nimi' value={arvosana.nimi} onChange={(e) => muuta(e)} /> <br />
                </label>
                {/* <label> Päivä:&nbsp;
                    <input type="text" name="paiva" value={arvosana.paiva} onChange={(e) => muuta(e)} /> <br />
                </label> */}
                <label> Arvosana:&nbsp;
                    <input type="text" name='arvosana' value={arvosana.arvo} onChange={(e) => muuta(e)} /> <br />
                </label>
                <input type="button" value='Lisää' onClick={() => lisaa()} />

            </form>
            {viesti}
        </>
    );
}

export default Arvosanalomake;