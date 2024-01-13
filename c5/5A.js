//HTTP

const http = require('http');

const handler = (req, res) => {
    console.log(req.url);
    // console.log(req.header['user-agent']);
    // console.log(req.method);
    console.log(req.url.split('/'))
    const [_,op,a,b] = req.url.split('/')
    let o;
    switch(op){
        case 'sobiranje':
        o = Number(a) + Number(b)
        res.end('rezultaot e ${o}')
        break
        case 'odzemanje':
        o = Number(a) - Number(b)
        res.end('rezultaot e ${o}')
        default:
            res.end('nema takva operacija')

    }
};

// const server = http.createServer((req, res) => {
//     res.end('Hello World');
// });

const server = http.createServer(handler)
server.listen(10000, "127.0.0.1", (err) => {
    if (err) console.log('error');
    console.log('server started on port 10000');
});

