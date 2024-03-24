import Nimet from "./components/Nimet";
import NimiHaku from "./components/NimiHaku";
import Nimilomake from "./components/NimiLomake";


const lukijat = [
  {
    id: 1,
    nimi: "Alma",
    ika: 10,
    parasKirja: "Risto Räppääjä"
  },
  {
    id: 2,
    nimi: "Suvi",
    ika: 41,
    parasKirja: "The Smoke Jumper"
  },
  {
    id: 3,
    nimi: "Teemu",
    ika: 42,
    parasKirja: "Kolme kitarasointua"
  },
  {
    id: 4,
    nimi: "Mehiläinen",
    ika: 1,
    parasKirja: "Kasvinhoitaja",
  }
];

function App() {

  return (
    <>
      <h3>Lukijat</h3>
      <Nimet nimilista={lukijat} />
      <h3>Nimihaku</h3>
      <NimiHaku nimilista={lukijat} />
      <h3>Nimilomake</h3>
      <Nimilomake />
    </>)
}

export default App;
