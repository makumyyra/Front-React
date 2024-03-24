//Komponentti, jolla voidaan hakea tietoa jollakin kriteerillä edellisen kohdan objektitaulukosta

import { useState } from "react";

function NimiHaku({ nimilista }) {
    const [nimi, setNimi] = useState('');
    const [haetaan, setHaetaan] = useState(false);

    const muuta = (e) => {
        setNimi(e.target.value);
        setHaetaan(false);
    }

    const hae = () => {
        setHaetaan(true);
    }

    const haeNimet = () => {
        if (haetaan) {
            let result = nimilista.filter(nimitieto => nimitieto.nimi.toLowerCase() === nimi.toLowerCase());
            if (result.length > 0) {
                let haku = result.map(nimitieto => {
                    return (
                        <p key={nimitieto.id}>
                            Nimi: {nimitieto.nimi} <br />
                            Ikä: {nimitieto.ika} <br />
                            Paras kirja: {nimitieto.parasKirja} <br />
                        </p>
                    );
                })
                return (haku);
            } else {
                return (<p>Kyseisellä nimellä ei löydy lukijaa</p>)
            }
        }
    }

    return (
        <div>
            <form>
                <label>Nimi:
                    <input type="text" name='nimi' value={nimi} onChange={(e) => muuta(e)} />
                </label>
                <input type="button" value='Hae' onClick={() => hae()} />
            </form>

            {haeNimet()}
        </div>
    )
}


export default NimiHaku;