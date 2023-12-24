console.log(".................1.................")
//? 1. Da se kreira modul potpisano kako vaga.js - i da ima metodi kade shto kje konvertira grama vo kilogrami i obratno
const { g_To_kg, kg_To_g } = require('./vaga')

console.log("Конверзија на грама во килограми :")
console.log(g_To_kg(2400))

console.log("Конверзија на килограми во грама :")
console.log(kg_To_g(5.6))

console.log(".................2.................")
//? 2. Da se kreira modul potpisan kako valuta - i da ima metodi koi sto kje konvertiraat evra vo denar, evra vo dolari, denari vo dolari i obratno
const { euroToMkd, euroToUsd, mkdToUsd, mkdToEuro } = require('./valuta')

console.log("Конверзија на евра во денари :")
console.log(euroToMkd(100))

console.log("Конверзија на евра во долари :")
console.log(euroToUsd(30))

console.log("Конверзија на денари во долари :")
console.log(mkdToUsd(4000))

console.log("Конверзија на денари во евра :")
console.log(mkdToEuro(2500))

console.log(".................3......................")
//? 3. Da se kreira modul po vasha zelba
const { mm_To_Cm, cm_To_Mm, cm_To_M, m_To_Cm, mm_To_M, m_To_Mm } = require('./dolzina')

console.log("Конверзија на милиметри во сантиметри :")
console.log(mm_To_Cm(100))

console.log("Конверзија на сантиметри во милиметри :")
console.log(cm_To_Mm(35))

console.log("Конверзија на сантиметри во метри :")
console.log(cm_To_M(250))

console.log("Конверзија на метри во сантиметри :")
console.log(m_To_Cm(3.5))

console.log("Конверзија на милиметри во метри :")
console.log(mm_To_M(800))

console.log("Конверзија на метри во милиметри :")
console.log(m_To_Mm(2.6)) 