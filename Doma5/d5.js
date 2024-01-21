const express = require('express');

const app = express();

//1 KALKULATOR 

app.get('/calculator/:op/:a/:b', (req, res) => {
    console.log(req.params);
    // so switch da kreirate kalkulator
    let rezultat;
    let a = req.params.a;
    let b = req.params.b;
    switch (req.params.op) {
        case 'sobiranje':
            rezultat = Number(a) + Number(b)
            res.send(`rezultaot e ${rezultat}`)
            break
        case 'odzemanje':
            rezultat = Number(a) - Number(b)
            res.send(`rezultaot e ${rezultat}`)
            break
        case 'mnozenje':
            rezultat = Number(a) * Number(b)
            res.send(`rezultaot e ${rezultat}`)
            break
        case 'delenje':
            rezultat = Number(a) / Number(b)
            res.send(`rezultaot e ${rezultat}`)
            break
        default:
            res.send('nema takva operacija')
    }
});

//2 IME, SOGLASKI, SAMOGLASKI 

app.get('/ime/:ime', (req, res) => {
    console.log(req.params);

    let ime = req.params.ime;
    const samoglaski = ['a', 'e', 'i', 'o', 'u'];

    let brojSimboliBroevi = ime.replace(/[a-z]/gi, '').length;
    let brojSamoglaski = 0;
    let imeBukvi = ime.toLowerCase().split("");

    imeBukvi.forEach(bukva => {
        brojSamoglaski += samoglaski.includes(bukva) ? 1 : 0;
    });

    let brojSoglaski = ime.length - brojSamoglaski - brojSimboliBroevi;

    res.send(`Ime: ${ime}, 
        Karakteri: ${ime.length}, 
        Soglaski: ${brojSoglaski}, 
        Samoglaski: ${brojSamoglaski}, 
        Simboli i broevi: ${brojSimboliBroevi}, 
        Parno: ${ime.length % 2 == 0 ? "da" : "ne"}`);
});

//SART NA SERVER SO KE SLUSA 

app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log(`Server started succesfully on port 10000`);
});
