import Matka from "./components/Matka";
import Matkalista from "./components/Matkalista";
import MatkalistaHaku from "./components/MatkalistaHaku";
import Matkalomake from "./components/Matkalomake";
import Lomat from "./components/Lomat";
import Arvosanalomake from "./components/Arvosanalomake";
import Kappale from "./components/Kappale";
import Elokuvat from "./components/Elokuvat";
import IdHakuKotit4 from "./components/IdHakuKotit4";
import Reseptit from "./components/Reseptit";


const matka1 = {
  id: 1,
  otsikko: 'Lomalla',
  paiva: '30.1.2024',
  paikka: 'Lohja',
  saa: 'Aurinkoista, 2',
  kuvaus: 'Lomalla Lohjalla'
};

const matkat = [
  {
    id: 1, otsikko: 'Lomalla',
    paiva: '26.5.2023', paikka: 'Lohja',
    saa: 'Aurinkoista, 10',
    kuvaus: 'Lomalla Lohjalla',
  },
  {
    id: 2, otsikko: 'Mökillä',
    paiva: '8.6.2023', paikka: 'Savonlinna',
    saa: 'Aurinkoinen, 21',
    kuvaus: 'Mökillä Itä-Suomessa',
  },
  {
    id: 3, otsikko: 'Sukuloimassa',
    paiva: '20.5.2023', paikka: 'Vantaa',
    saa: 'Pilvinen, 9',
    kuvaus: 'Kahvihetki',
  }
];

const kesalomat = [
  {
    nimi: "Virtanen Matti",
    alkupaiva: "2023-06-01",
    loppupaiva: "2023-06-30",
  },
  {
    nimi: "Laaksonen Lisaa",
    alkupaiva: "2023-06-26",
    loppupaiva: "2023-07-27",
  },
  {
    nimi: "Korhonen Maija",
    alkupaiva: "2023-08-03",
    loppupaiva: "2023-08-30",
  },
];

function App() {

  return (
    <>
      {/*<Matka matka={matka1} paiva={'30.01.24'} />*/}
      {/*<h3>Lista</h3>
      <Matkalista lista={matkat} />
      <h3>Haku</h3>
      <MatkalistaHaku matkat={matkat} />
      <h3>Matkalomake</h3>
      <Matkalomake />
      <h3>Kesälomat</h3>
      <h3>Lomat</h3>
      <Lomat lomat={kesalomat} />
      <h3>Lisää arvosana</h3>
      <Arvosanalomake />
      <Kappale />
      <h3>Elokuvat:</h3>
      <Elokuvat />
      <IdHakuKotit4 />*/}
      <Reseptit />
    </>)
}

export default App;
