const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));

//? Da se kreira get ruta koja kje presmetuva bmi

app.get('/bmi/:weight/:height', (req, res) => {
    let { weight, height } = req.params;
    let bmi = (Number(weight) / Math.pow(Number(height), 2) * 10000);
    res.send(bmi);
});

//? da se kreira post ruta koja kje presmetuva bmi

app.post('/bmi', (req, res) => {
    let { weight, height } = req.body;
    let bmi = (Number(weight) / Math.pow(Number(height), 2) * 10000);
    res.send(bmi);
});

//? Da se kreira konverter na pari koj kje konvertira eurotodolar, dolartoeuro, mkdtoeuro,eurotomkd so get i post metoda

const euroToUsd = iznos => iznos * 1.1 + ' USD';
const usdToEuro = iznos => iznos / 1.1 + ' EUR';
const euroToMkd = iznos => iznos * 61.5 + ' MKD';
const mkdToEuro = iznos => iznos / 61.5 + ' EUR';

//GET metoda
app.get('/convert/euroToUsd/:iznos', (req, res) => {
    res.send(euroToUsd(req.params.iznos));
});
app.get('/convert/usdToEuro/:iznos', (req, res) => {
    res.send(usdToEuro(req.params.iznos));
});
app.get('/convert/mkdToEuro/:iznos', (req, res) => {
    res.send(mkdToEuro(req.params.iznos));
});
app.get('/convert/euroToMkd/:iznos', (req, res) => {
    res.send(euroToMkd(req.params.iznos));
});

//POST metoda
app.post('/convert/euroToUsd', (req, res) => {
    res.send(euroToUsd(req.body.iznos));
});
app.post('/convert/usdToEuro', (req, res) => {
    res.send(usdToEuro(req.body.iznos));
});
app.post('/convert/mkdToEuro', (req, res) => {
    res.send(mkdToEuro(req.body.iznos));
});
app.post('/convert/euroToMkd', (req, res) => {
    res.send(euroToMkd(req.body.iznos));
});

//? da se kreira ruta koja kje presmetuva dali nekoe ime e parno neprano, i kolku karakteri ima i kolku samoglaski so post metoda

app.post('/ime', (req, res) => {

    let ime = req.body.ime;
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

//? Da se kreira ruta koja kako parametar kje prima godina na datum i godina na ragjanje i koja kako respond kje vrakja horoskopski znak soodveten so mesecot so get i post metoda

//? Da se kreira ruta koja kje presmetuva perimetar i plostina na pravoagolnik so poznati dve strani so get i post metoda

const plostina = (a, b) => a * b;
const perimetar = (a, b) => 2 * a + 2 * b;

//GET metoda
app.get('/pravoagolnik/:a/:b', (req, res) => {
    res.send(`Plostina: ${plostina(req.params.a, req.params.b)}, Perimetar: ${perimetar(req.params.a, req.params.b)}`);
});

//POST metoda
app.post('/pravoagolnik', (req, res) => {
    res.send(`Plostina: ${plostina(req.body.a, req.body.b)}, Perimetar: ${perimetar(req.body.a, req.body.b)}`);
});

//? Da se kreira ruta koja kje presmetuva hipotenuza na triagolnik poznavajki gi dvete pomali strani so get i post metoda

const hipotenuza = (a, b) => Math.sqrt(a ** 2 + b ** 2);

//GET metoda
app.get('/hipotenuza/:a/:b', (req, res) => {
    res.send(`Hipotenuza: ${hipotenuza(req.params.a, req.params.b)}`);
});

//POST metoda
app.post('/hipotenuza', (req, res) => {
    res.send(`Hipotenuza: ${hipotenuza(req.body.a, req.body.b)}`);
});

//? Da se kreira ruta koja kje presmetuva nekoj tekst kolku zborovi ima so post metoda

app.post('/tekst', (req, res) => {
    let nizaTekst = req.body.tekst.split(" ");
    res.send(`Broj na zborovi: ${nizaTekst.length}`);
});

//START NA SERVER SO KE SLUSA 

app.listen(10000, (err) => {
    if (err) return console.log(err);
    console.log(`Server started succesfully on port 10000`);
});