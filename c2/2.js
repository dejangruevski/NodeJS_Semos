// da se kreira kalkulator koj ke sobira, odzema, mnozi i deli po upotreba na switch
// pojasnuvanje da se kreira funkcija so switch





//TYPE OF

console.log(typeof undefined)// undefined
console.log(typeof 230)// number
console.log(typeof 'type')// string
console.log(typeof null)// object
console.log(typeof '23')// string
console.log(typeof +'23')// number
console.log(console.log)// function log
console.log(typeof false)// boolean

//BOOLEAN TRUE FALSE

console.log(Boolean(1))//true
console.log(Boolean(0))//false
console.log(Boolean(-2))//true
console.log(Boolean(''))//false
console.log(Boolean('0'))//false
console.log(Boolean(+'0'))//false

console.log(2 > 1)//true
console.log(2 < 1)//false

console.log(2 == '2')//true
console.log(2 === '2')//false
console.log(2 != 1)//true

console.log(!true)//false

// || &&

console.log(true || true)//true
console.log(true || false)//true
console.log(false || true)//true
console.log(false || false)//false

console.log(true && false)//false
console.log(false && true)//false

//ternary operators (skratena varijanta na if else)
//uslov? uslovot ako e tocen : uslovot ako e netocen

const godini = 26
const vozrast = godini >= 18 ? "polnoletno" : "ne e polnoletno"
console.log(vozrast)

//Working with ARRAYS


//zadaca: Da se logira sekoj broj poedinecno
const arrayEden = [5, 2, 3, 7];
for (let i = 0; i < arrayEden.length; i++)
    console.log(arrayEden[i]);
//
const emptyArray = [];
for (let i = 0; i < arrayEden.length; i++) {
    emptyArray.push(arrayEden[i] + 1);
}
console.log(emptyArray[i]);


//implementacija na HIGH ORDER FUNCTION IN JS
//map, forEach, filter i sort

//forEach vrsi iteracija na sekoj element vo arrayot, znaci ne go modificira po default tuku 
//samo go izminuva elmentot no ako sakame moze da go modificirame arrayot

let test = [10, 2, 3, 4, 5, 6]
test.forEach((item, index) => console.log(item))
test.forEach((item, index, arr) => (arr[index] = item + 10))
console.log(test);

//Map izminuva niza i kreira nova niza 

const test2 = [3, 6, 2, 1, 20]
const rezultat = test2.map((item, i) => {
    return item + i
})

//Reduce reducira, namaluva, sumira niza na eden edinstven rezultat

const reduceRezultat = test2.reduce((acc, s) => {
    return acc + s
}, 0) //0 e pocetna suma kaj so pocnuva da sobira
console.log('suma sumarum ${reduceRezultat')

//Sort sortira elementi vo nizata spored dadena funkcija za sortiranje

test2.sort((a, b) => b - a)
console.log(test2);

//Filter vraka niza od elementi koi odgovaraat na postaveniot uslov

const testFilter = test2.filter((item) => {
    return item > 5
})
console.log(testFilter);

//Find vraka element od nizata koj odgovara na postaveniot uslov

const testFind = test2.find((item) => {
    return item == 100
})
console.log(testFind);

//Kopiranje na array

const array1 = [2, 3, 4, 5];
const array2 = [2, 1, 0, 2, 45, 6];
//  [2, 3, 4, 5,2, 1, 0, 2, 45, 6]

const array3 = [...array1, ...array2];
console.log(array3);

const obj1 = {
    item1: 'First',
    item2: 'Second',
};
const newObject = {
    ...obj1,
    item3: 'third',
};

console.log(newObject);

//! Destruction(razlozuvanje) on Array
const arra1 = [1, 2, 3];
const [a, b, c] = arra1;
console.log(c);

const arr2 = [50, 100, 200, 300, 500];
const [element, ...remainingElements] = arr2;
console.log(element);
console.log(remainingElements);

//! Destruction on Objects
const myObject = { produkt: 'Smoki', cena: 120 };
const { produkt: novoIme, cena } = myObject;
console.log(novoIme, cena);
