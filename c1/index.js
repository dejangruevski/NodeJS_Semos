console.log('Welcome Node JS')
console.log('1')
console.log('2 ')
console.log('3')

// Funkcionalni deklaracii
function sobirok(a,b){
    return a+b
}
console.log(sobirok(1,2))

// Funkcionalni ekspresii
const prozivod = function (a,b){
    return a*b
}
console.log(prozivod(1,2))

// Fat-arrow functions
const razlika = (a,b) => a-b
console.log(razlika(1,2))
  
//Metodi se koristat vo objekti

const ucenik = {
    ime: "Trajan",
    pozdrav: function () {
        console.log('Zdravo' + this.ime)
    },
}
ucenik.pozdrav()

//IIFFE imidiately invoked function expression
(function(){
    console.log('Ova e nasiot taen kod')
})()

//Zadaca 1
//Da se konvertita funkcionalna ekspresija so ime c2f koj ke konvertira celziusovi stepeni vo farenhajtovi

let v2f = celsius => celsius * 9 / 5 + 32
console.log(c2f(25))