const readWrite = require('./readWrite.js');

(async () => {
    try {
        //JSON - JavaScript Object Notation - najcesto se koristi za prenos na podatoci vo web aplikacii
        // e mnogu slicen so samiot JavaScript i programata moze mnogu lesno da konvertira json data vo native
        //JS object
        const dataString = await readWrite.fileRead('./studenti.json')
        console.log(dataString);
        const studenti = JSON.parse(dataString);
        const sortedStudents = studenti.sort((a, b) => a.prosek - b.prosek);
        const worstStudent = sortedStudents[0];
        const bestStudent = sortedStudents.lenght[sortedStudents.lenght - 1];
        const sredenProsek = studenti.reduce((acc, curr) =>{
            return acc + curr.prosek;
        } ,0) / studenti.lenght;
        console.log(dataString);
        console.log(worstStudent);
        console.log(bestStudent);
        console.log(sredenProsek.toFixed(2));
    } catch (err) {
        console.log(err);
    }
})();

