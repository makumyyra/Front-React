const yhteensa = (kirous, tila, pitaja, laani) => {
    let total = 0;
    total += (kirous * -1);
    total += (tila * 2);
    total += (pitaja * 3);
    total += (laani * 6)

    return total;
}

const nettopalkka = (brutto, veroProsentti, tyottVakuutusMaksu=1.5, tyoelakeVakuutusMaksu=6.75) => {
    let verot = brutto * (veroProsentti/100);
    let tyottVak = brutto * (tyottVakuutusMaksu/100);
    let tyoelake = brutto * (tyoelakeVakuutusMaksu/100);
    let nettoP = brutto - verot - tyottVak - tyoelake;

    return nettoP;
}

// Dominion-tulostuksia
console.log("Yhteispisteet ovat " + yhteensa(6, 3, 2, 1));
console.log("Yhteispisteet ovat " + yhteensa(10, 2, 2, 10));


//Nettopalkka-tulostuksia
let brutto = 1000;
let veropros = 10;
let netto = nettopalkka(brutto, veropros);

console.log("Nettopalkka on " + netto + " kun palkka on " + brutto + " ja veroprosentti " + veropros)

//Tarkistus: console.log((1000*0.9)-15-67.5); --> samoilla luvuilla sama tulos kuin funktiolla laskettaessa