// FS
const fs = require('fs') //file sistem modul za rabota so fajlovi

// SYNHRONA VERZIJA
const vtcituvanjeNaText = fs.readFileSync('./text.txt', 'utf-8')
console.log(vtcituvanjeNaText)

const podatok = 'Ova sakame da go zapisime vo nasiot PC ${2+2}'
fs.writeFileSync('./novTekst.txt', podatok)

//Callback
function pozdrav(ime, callback) {
    console.log('Zdravo, ${ime}')
    callback()
}

function chao() {
    console.log('Chao!')
}

pozdrav('Mirko', chao)

//ASYNC VERZIJA
fs.readFile('./text.txt', 'utf-8', (err, text) => {
    if (err) {
        return console.log('ima greska')
    }
    console.log('Async verzija ${text}')
})
console.log('test')

fs.writeFile('./asyncWrite.txt', "async text", 'utf-8', (err) => {
    console.log('uspesno')
})

// Promise pattern

// // Cekor 1
// // definiranje ime na promise funkcijata
// const fileWrite = () => { }

// //Cekor 2
// //funkcijata ke ni vrati vov promis
// const fileWrite = () => {
//     return new Promise()
// }

// //Cekor 3
// //ke kreirame egzekutor funkcija vo promisot
// const fileWrite = () => {
//     return new Promise(() => ())
// }

// //Cekor 4
// //Ke vnesime dva parametri sucesss i fail koi se callback funkcii
// const fileWrite = () => {
//     return new Promise((sucesss, fail) => { })
// }

// //Cekor 5
// //ke ja zapisime fs.writeFile funkcijata vnatre vo egzekucionata funkcija
// const fileWrite = () => {
//     return new Promise((sucesss, fail) => {
//         fs.writeFile('data.txt', "Hello World from Node", 'utf-8', (err =>){
//             if(err)return console.log(err)
//             console.log('Zapisot e napraven')
//         })
//     })
// }

// //Cekor 6
// //Vo ovoj slucaj ako imame  errr ke se aktivira fail funkcijata ako ne ke se  aktivira succes funkcijata
// const fileWrite = () => {
//     return new Promise((sucesss, fail) => {
//         fs.writeFile('data.txt', "Hello World from Node", 'utf-8', (err) => {
//             if (err) return fail(err)
//             return succes()
//         })
//     })
// }

// //Cekor 7
// //kreiranje na modularna funkcija koja ke moze da funkcionira so parametri
const fileWrite = (filename, data) => {
    return new Promise((sucesss, fail) => {
        fs.writeFile(filename, data, 'utf-8', (err) => {
            if (err) return fail(err)
            return succes()
        })
    })
}

//readFile
const fileRead = (filename) => {
    return new Promise((success, fail) => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) return fail(err)
            return succes(data)
        })
    })
}

const main = async () => {
    try {
        fileWrite('data1.txt', 'Nov fajl zapis od promise!')
        const primer = await fileRead('text.txt')
        console.log(primer)
    } catch (err) {
        console.log(err)
    }
}
main()
//Promisot moze da bide 
//Pending: inizijalna sostojba ne e ni ispolnet ni odbien promisot
//Fullfill ili success: Oznacuva deka operacijata zavrsila uspesno
//Rejected: Oznacuva deka operacijata zavrsila so greska



const imenik = [
    { ime: 'Pero Peroski', telefon: 223305, },
    { ime: 'Janko Jankoski', telefon: 232305, },
    { ime: 'Stanko Stankoski', telefon: 223505, },
]

    (async () => {
        try {
            const imenikData = JSON.stringify(imenik)
            await fileWrite('imenik.json', imenikData)
            let dataString = await fileRead('imenik.json')
            let data = JSON.parse(dataString)
            console.log(data)
        } catch (err) {
            console.log(err)
        }
    })

//unlink
const deleteFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.unlink(filename, (err) => {
            if (err) {
                return reject(err)
            }
            resolve()
        })
    })
}
