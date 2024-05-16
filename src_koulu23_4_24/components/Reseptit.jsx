import { useState, useEffect } from "react";

function Reseptit() {
    const [kanareseptit, setKanareseptit] = useState([]);
    const [error, setError] = useState('Haetaan');

    const fetchUrl = async () => {
        try {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
            const json = await response.json();
            console.log(json);
            setKanareseptit(json.meals);
            setError('');

        } catch (error) {
            setError('Haku ei onnistunut')
        }
    }
    useEffect(() => { fetchUrl(); }, []);

    if (kanareseptit.length === 0) {
        return (<p>{error}</p>);
    }

    return (
        <>
            <h3>Kanaruokareseptejä sivulta TheMealDB:</h3>
            {

                kanareseptit.map(resepti => {
                    return (
                        <p key={resepti.idMeal}>
                            {resepti.strMeal}
                        </p>

                    );
                })
            }
        </>
    );


}

export default Reseptit;