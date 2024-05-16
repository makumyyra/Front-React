const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('kirjasto.db');

const kirja = [
    { id: 1, otsikko: 'Risto Räppääjä ja viimeinen tötterö', kirjailija: 'Sinikka Nopola, Tiina Nopola', vuosi: 1234, sivuja: '96', picture: 'rr1.jpg', suosikki: false },
    { id: 2, otsikko: 'RR2', kirjailija: 'Sinikka Nopola, Tiina Nopola', vuosi: 2005, sivuja: '102', picture: 'rr2.jpg', suosikki: false },
    { id: 3, otsikko: 'RR3', kirjailija: 'Sinikka Nopola, Tiina Nopola', vuosi: 2000, sivuja: '115', picture: 'rr3.jpg', suosikki: false },
    { id: 4, otsikko: 'Heppa', kirjailija: 'Hevos Kuiskaaja', vuosi: 1111, sivuja: '235', picture: 'hevoset1.jpg', suosikki: false },
    { id: 5, otsikko: 'Chinchilla', kirjailija: 'Miis Miis', vuosi: 2345, sivuja: '74', picture: 'chinchilla.jpg', suosikki: false },
    { id: 6, otsikko: 'Stylesin tapaus', kirjailija: 'Agatha Christie', vuosi: 1982, sivuja: '238', picture: 'christie1.jpeg', suosikki: false },
    { id: 7, otsikko: 'Idän pikajunan arvoitus', kirjailija: 'Agatha Christie', vuosi: 1973, sivuja: '385', picture: 'christie2.jpeg', suosikki: false },
    { id: 8, otsikko: 'Taivaan pilarit', kirjailija: 'Ken Follett', vuosi: 1979, sivuja: '896', picture: 'follet1.jpeg', suosikki: false },
    { id: 9, otsikko: 'The Smoke Jumper', kirjailija: 'Nicholas Evans', vuosi: 1999, sivuja: '400', picture: 'thesm.jpg', suosikki: false }
];

const lukija = [
    { id: 1, nimi: "Alma", ika: 10, parasKirja: "Risto Räppääjä" },
    { id: 2, nimi: "Suvi", ika: 41, parasKirja: "The Smoke Jumper" },
    { id: 3, nimi: "Teemu", ika: 42, parasKirja: "Kolme kitarasointua" },
    { id: 4, nimi: "Mehiläinen", ika: 1, parasKirja: "Kasvinhoitaja" }
];


db.serialize(() => {

    let sql = "CREATE TABLE kirja (" +
        "id integer PRIMARY KEY NOT NULL, " +
        "otsikko text NOT NULL, " +
        "kirjailija text NOT NULL, " +
        "vuosi integer, " +
        "sivuja integer NOT NULL, " +
        "picture text, " +
        "suosikki boolean NOT NULL )";


    db.run(sql, (error) => {
        if (error) {
            return console.log(error.message);
        }
        console.log("Table created");
    });

    kirja.forEach(book => {
        sql = `
            INSERT INTO kirja (id, otsikko, kirjailija, vuosi, sivuja, picture, suosikki) 
            VALUES (?, ?, ?, ?, ?, ?, ?)
        `;
        db.run(sql, [book.id, book.otsikko, book.kirjailija, book.vuosi, book.sivuja, book.picture, book.suosikki], (err) => {
            if (err) {
                return console.log(err.message);
            }
            console.log("Row added");
        });
    });

    db.each("SELECT id, otsikko FROM kirja", (err, row) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(row.id + ", " + row.otsikko);
    });



    sql = `
    CREATE TABLE IF NOT EXISTS lukija (
        id INTEGER PRIMARY KEY NOT NULL,
        nimi TEXT NOT NULL,
        ika INTEGER NOT NULL,
        parasKirja TEXT NOT NULL
    )
    `;

    db.run(sql, (error) => {
        if (error) {
            return console.log(error.message);
        }
        console.log("Table 'lukija' created");
    });

    // Insert data into 'lukija' table
    lukija.forEach(person => {
        sql = `
            INSERT INTO lukija (id, nimi, ika, parasKirja) 
            VALUES (?, ?, ?, ?)
        `;
        db.run(sql, [person.id, person.nimi, person.ika, person.parasKirja], (err) => {
            if (err) {
                return console.log(err.message);
            }
            console.log("Row added to 'lukija'");
        });
    });

    // Query data from 'lukija' table
    db.each("SELECT id, nimi FROM lukija", (err, row) => {
        if (err) {
            return console.log(err.message);
        }
        console.log(row.id + ", " + row.nimi);
    });


    db.close();
});