const lomamerkinnat = [
    {
     nimi: "Virtanen Matti",
     alkupaiva: "2023-06-01",
     loppupaiva: "2023-06-30",
    },
    {
     nimi: "Laaksonen Lisa",
     alkupaiva: "2023-07-01",
     loppupaiva: "2023-07-31",
    },
    {
     nimi: "Niemi Juha",
     alkupaiva: "2023-06-01",
     loppupaiva: "2023-06-14",
    },
    {
     nimi: "Lehtonen Erkki",
     alkupaiva: "2023-08-01",
     loppupaiva: "2023-08-31",
    } ];

const listaus = lomamerkinnat.map(lomamerkinta => {
    return (
        {
            'loma': lomamerkinta.nimi + ' alkaa ' + lomamerkinta.alkupaiva + ', päättyy ' + lomamerkinta.loppupaiva
        }
    )
}
);

console.log(listaus);