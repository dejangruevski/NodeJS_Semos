//? student [ime, prezime, prosek, grad]
//?1 Dodavanje na student od fajlot
//?2 Brishenje na student od fajlot
//?3 Menuvanje na podatooci na student od fajlot
//?4 Chitanje na site studenti od fajlot

//? - treba da dodademe student vo fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. da ja konvertirate sodrzinata od obichen tekst vo js niza / objekt | JSON.parse
//? 3. Treba da gi dodadete podatocite na studentot vo nizata | Array.push
//? 4. Nizata od js niza / objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da vide zachuvan vo fajlot | fs.writeFile

//? - Imeto na studentt treba da bide smeneto od AAA vo AAB
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obichen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da napravite promena samo na soodvetniot clen | Array.map
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.strinify
//? 5. Tekstot treba da vide zachuuvan fo fajlot | fs.writeFile

//? - Treba da se izbrishe student od fajlot
//? 1. Da ja vchitate celata sodrzina od fajlot | fs.readFile
//? 2. Da ja konvertirate sodrzinata od obicchen tekst vo js niza/objekt | JSON.parse
//? 3. Da gi izminite site elementi vo nizata i da go izbrishite samo soodvetniot clen | Array.filter
//? 4. Nizata od js niza/objekt treba da bide konvertirana vo tekst | JSON.stringify
//? 5. Tekstot treba da bide zachuvan vo fajlot | fs.writeFile

const readWrite = require('./moduli.js');

//?1 Dodavanje na student od fajlot

(async () => {
    try {
        console.log(".................1 - Start.................");
        const fileRead = await readWrite.fileRead('./studenti.json');
        let studenti = JSON.parse(fileRead);
        studenti.push({ "ime": "Trajko", "prezime": "Pecevski", "grad": "Gevgelija", "prosek": 8.5 });
        let studentiString = JSON.stringify(studenti);
        await readWrite.fileWrite("./studenti_1.json", studentiString);
        console.log(".................1 - End.................");
    } catch (error) {
        console.log("1: " + error);
    }
})();


//?2 Brishenje na student od fajlot

(async () => {
    try {
        console.log(".................2 - Start.................");
        const fileRead = await readWrite.fileRead('./studenti.json');
        let studenti = JSON.parse(fileRead);
        const studentiFilter = studenti.filter(student => student.ime != 'Goran');
        await readWrite.fileWrite('./studenti_2.json', JSON.stringify(studentiFilter));
        console.log(".................2 - End.................");
    } catch (error) {
        console.log("2: " + error);
    }
})();

// //?3 Menuvanje na podatooci na student od fajlot

(async () => {
    try {
        console.log(".................3 - Start.................");
        const fileRead = await readWrite.fileRead('./studenti.json')
        let studenti = JSON.parse(fileRead);
        studenti.map(student => {
            if (student.ime == "Toni") {
                student.ime = "Dejan";
            }
        });
        let studentiString = JSON.stringify(studenti);
        await readWrite.fileWrite('./studenti_3.json', studentiString);
        console.log(".................3 - End.................");
    } catch (error) {
        console.log("3: " + error);
    }
})();


//?4 Chitanje na site studenti od fajlot

(async () => {
    try {
        console.log(".................4 - Start.................");
        const fileRead = await readWrite.fileRead('./studenti.json');
        console.log(fileRead);
        console.log(".................4 - End.................");
    } catch (error) {
        console.log("4: " + error);
    }
})();