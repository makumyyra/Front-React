// komponentti, joka listaa (lomaketta) vastaavan objektitaulukon tiedot map metodilla. 

function Nimet({ nimilista }) {
    return (
        <>
            {
                nimilista.map(nimitieto => {
                    return (
                        <p key={nimitieto.id}>
                            Nimi: {nimitieto.nimi} <br />
                            Ikä: {nimitieto.ika} <br />
                            Paras kirja: {nimitieto.parasKirja}
                        </p>
                    );
                })
            }
        </>
    )
}
export default Nimet;