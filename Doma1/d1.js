//? Zadacha broj 1
//? Da se kreira funkcijalna ekspresija so ime c2f koja kje konvertira celziusovi stepeni vo farenhaht

let c2f = celsius => celsius * 9 / 5 + 32
console.log(c2f(30))


//? Zadacha broj 2
//? Da se kreira Fat Arrow Function so ime f2c koja kje konvertira farenhajt vo celzius,
//? i koja vo megju vreme kje logira ako temperaturata e pod 0, kje logira deka temperaturata e niska,
//? od 0 do 22 stepeni kje logira deka temperaturata e nomrlana i nad 22 stepeni kje logira temperaturata e pokachena
//? NAPOMENA FUNCKIJATA TREBA DA GO VRATI BROJOT VO STEPENI

function f2c(farenheit) {
    let celsius = (farenheit - 32) * 5 / 9

    if (celsius < 0) {
        return `${celsius} Ниска температура`
    } else if (celsius >= 0 && celsius <= 22) {
        return `${celsius} Нормална температура`
    } else {
        return `${celsius} Покачена температура`
    }
}
console.log(f2c(20))
console.log(f2c(70))
console.log(f2c(100))


//? Zadacha broj 3
//? Da se kreira metoda vo objekt kade shto objektot bi imal 2 parametri prviot bi bil broj 1 so nekakva vrednost i vtoriot parametar bi bil boj2, metodata bi se vikala zbir kade sto kje treba da gi soberi prviot i vtoriot parametar od objektot

const objekt = {
    broj_1: 10,
    broj_2: 5,

    zbir(broj_1, broj_2) {
        return this.broj_1 + this.broj_2
    }
}
console.log(objekt.zbir())