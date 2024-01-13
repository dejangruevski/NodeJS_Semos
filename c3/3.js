//1 CORE moduli
//http - za kreiranje i rakuvanje so server
//assert - se koristi za testiranje i debagiranje
//fs(file system) - za interakcija so datotocen sistem na nasiot kompjuter
//path - so ova jaodreduvame patekata na nasiot direktorium
//process -  dava informacii so koi procesi nasata aplikacija raboti
//os - ni dava informacii za koj operativen sistem se naoga nasata nodeJS aplikacija

//2 - Lokalni moduli
//ovie moduli nie ke gi kreirame
const calculator = require('./calculator')
const {sobiranje, odzemanje, mnozenje, delenje} = require('./calculator')
console.log(calculator.sobiranje(2,3))
console.log(sobiranje(2, 3));


//3 - Third party moduli
//express - e biblioteka koja ni ovozmozuva da kreirame web servisi
//mongoose - e biblioteka koja ni ovozmozuva da vrsime interakcija so data baza
//dotenv, ejs, morgan ....