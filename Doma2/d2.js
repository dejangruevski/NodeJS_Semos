const studenti = [
    { ime: 'Bojan', prosek: 6.2, grad: 'Skopje' },
    { ime: 'Vesna', prosek: 9.7, grad: 'Skopje' },
    { ime: 'Atanas', prosek: 10, grad: 'Skopje' },
    { ime: 'Elena', prosek: 6.2, grad: 'Bitola' },
    { ime: 'Muhamed', prosek: 10, grad: 'Kumanovo' },
    { ime: 'Dzejlan', prosek: 9.2, grad: 'Kumanovo' },
    { ime: 'Milim', prosek: 7.2, grad: 'Kumanovo' },
    { ime: 'Selim', prosek: 7.8, grad: 'Kichevo' },
    { ime: 'Martina', prosek: 5.2, grad: 'Tetovo' },
    { ime: 'Simona', prosek: 5.2, grad: 'Bitola' },
    { ime: 'Stojmir', prosek: 6.2, grad: 'Strumica' },
    { ime: 'Mitre', prosek: 8, grad: 'Pehcevo' },
    { ime: 'Damjan', prosek: 5, grad: 'Shtip' },
    { ime: 'Aleksandar', prosek: 7, grad: 'Veles' },
];

//? 1. Site studenti od Skopje chie ime zavrshuva na a i imaat prosek nad 7 pordedeni po ime(rasyechki)
console.log("Сите студенти од Скопје кое име завшува на а и имаат просек на 7 :")
let studentiSkopje = studenti
  .filter(student => student.grad == 'Skopje' && student.ime.endsWith('a') && student.prosek > 7)
  .sort((a, b) => a.ime.localeCompare(b.ime))
console.log(studentiSkopje)

//? 2. Site studenti koi imaat prosek nad 9 i ne se od Skopje, podredeni po prosek opagjachki
console.log("Сите студенти кои имаат просек над 9 и не се од Скопје, подредени по просек опаѓачки :")
let studentiSkopje2 = studenti
  .filter(student => student.prosek > 9 && student.grad !== 'Skopje')
  .sort((a, b) => b.prosek - a.prosek)
console.log(studentiSkopje2)

//? 3. Prvite 3 studenti koi imaat iminja od 5 karakteri, podredeni po prosek
console.log("Првите 3 студенти кои имаат имиња од 5 карактери, подредени по просек :")
let studentiIminja = studenti
  .filter(student => student.ime.length == 5)
  .sort((a, b) => b.prosek - a.prosek)
  .slice(0, 3)
console.log(studentiIminja)

//? 4. Vkupen prosek na studenti koi se od Kumanovo
console.log("Вкупен преосек на студенти кои се од Куманово :")
let studentiKumanovo = studenti
  .filter(student => student.grad == 'Kumanovo')
  .reduce((sum, student) => sum + student.prosek, 0) / studenti.filter(student => student.grad === 'Kumanovo').length
console.log(studentiKumanovo)

//? 5. Prosek na prosecite od gradovite Skopje i Ohrid
console.log("Просек на просеците од градовите Скопје и Охрид :")


//? 6. Da se dodade usgte eden student so ime Goran prosek 8.3 i Strumica
console.log("Нов студент :")
let novStudent = { ime: 'Goran', prosek: 8.3, grad: 'Strumica' }
studenti.push(novStudent)
console.log(studenti)

//? 7. Da se izbrishe prviot student vo studenti
console.log("Избришан првиот студент од низата :")
let izbrisanStudent = studenti.shift()
console.log(izbrisanStudent)

//? 8. Da se kreira nov array kade shto studentite od Ohrid, Skopje i Kumanovo kade shto ocenkite so prosek se za 1 pogolem (Dinamichki)
console.log("Нова низа каде што студентите од Охрид и Куманово, каде оценките со пресек се за 1 поголем  :")