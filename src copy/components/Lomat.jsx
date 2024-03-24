function Lomat({ lomat }) {
    return (
        <div>
            {
                lomat.map(loma => {
                    return (
                        <p key={loma.nimi}>
                            Nimi: {loma.nimi} < br />
                            Alkaa:{loma.alkupaiva} <br />
                            Päättyy: {loma.loppupaiva}
                        </p>
                    );
                })

            }
        </div>
    )

}
export default Lomat;