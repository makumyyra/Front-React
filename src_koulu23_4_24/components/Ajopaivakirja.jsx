function Ajopaivakirja({ ajopaivakirja, tekija, otsikko }) {

    return (
        <div style={{ marginLeft: 30, }}>
            <h3>{otsikko}</h3>

            <p>Rekisterinro: {ajopaivakirja.rekisterinro}<br />
                Laatija: {ajopaivakirja.laatija}<br />
                Alku: {ajopaivakirja.alku}<br />
                {/* Lukema: {ajopaivakirja.alku.lukema}<br />
                Lähtöaika: {ajopaivakirja.lahtoaika}<br />
                Alkupäivä: {ajopaivakirja.alku.paiva}<br />
                Paikka: {ajopaivakirja.alku.paikka}<br />
                Loppu: {ajopaivakirja.loppu}<br />
                Lukema: {ajopaivakirja.loppu.lukema}<br />
                Loppuaika: {ajopaivakirja.loppuaika}<br />
                Loppupäivä: {ajopaivakirja.loppu.paiva}<br />
                Paikka: {ajopaivakirja.loppu.paiva}<br /> */}
            </p>
            <div>Tekijä: {tekija}</div>
        </div>
    );
}

export default Ajopaivakirja;


