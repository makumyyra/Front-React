import { setISODay } from "date-fns";
import { useEffect, useState } from "react"

function IdHakuKotit4() {
    const [id, setID] = useState(-1);
    const [nimi, setNimi] = useState('');
    const [kayttaja, setKayttaja] = useState('');
    const [street, setStreet] = useState('');
    const [city, setCity] = useState('');
    // const [osoite, setOsoite] = useState({ Street: '', City: '' });
    const [error, setError] = useState('Haetaan');


    const fetchUrl = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users/5');
            const json = await response.json();
            console.log(json);

            setID(json.id);
            setNimi(json.name);
            setKayttaja(json.username);
            // setStreet(json.address.street);
            setCity(json.address.city);
            // setOsoite.Street(json.addess.street);
            // setOsoite.City(json.addess.city);


        } catch (error) {
            setError('Information not found')
        }

    }

    useEffect(() => { fetchUrl(); }, []);

    return (
        <>
            Nimi: {nimi} <br />
            Käyttäjä: {kayttaja} <br />
            Kaupunki: {city}


        </>
    )

}

export default IdHakuKotit4;


