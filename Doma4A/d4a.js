//?Servis koj kje obrabotuva ruti od sledniot tip
//? 15 iminja po zelba
//? /ime/bojan

//? parno: da, karakteri: 5,soglaski:2, samogalski: 3

const http = require('http');

const handler = (req, response) => {
    console.log("Request URL: " + req.url);
    const [_, op, ime] = req.url.split('/');

    if (op !== "ime") {
        response.end(`Nevalidna operacija: ${op}`);
        return;
    }

    const samoglaski = ['a', 'e', 'i', 'o', 'u'];

    let brojSimboliBroevi = ime.replace(/[a-z]/gi, '').length;
    let brojSamoglaski = 0;
    let imeBukvi = ime.toLowerCase().split("");

    imeBukvi.forEach(bukva => {
        brojSamoglaski += samoglaski.includes(bukva) ? 1 : 0;
    });

    let brojSoglaski = ime.length - brojSamoglaski - brojSimboliBroevi;

    response.end(`Ime: ${ime}, 
            Karakteri: ${ime.length}, 
            Soglaski: ${brojSoglaski}, 
            Samoglaski: ${brojSamoglaski}, 
            Simboli i broevi: ${brojSimboliBroevi}, 
            Parno: ${ime.length % 2 == 0 ? "da" : "ne"}`);
};

const server = http.createServer(handler);
server.listen(10000, 'localhost', (error) => {
    if (error) console.log('error');
    console.log('server started on port 10000');
});
