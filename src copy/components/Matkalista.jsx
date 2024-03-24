function Matkalista({ lista }) {
    return (
        <div>
            {
                lista.map(matka => {
                    return (
                        <p key={matka.id}>
                            Otsikko: {matka.otsikko} <br />
                            Päivä: {matka.paiva} <br />
                            Paikka: {matka.paikka} <br />
                            Sää: {matka.saa} <br />
                            Kuvaus: {matka.kuvaus} <br />


                        </p>
                    );
                })
            }
        </div>
    );

}
export default Matkalista;