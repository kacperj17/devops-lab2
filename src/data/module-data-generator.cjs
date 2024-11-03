const fs = require('fs');

const count = Number(process.argv[2]); // odczyt liczby obiektów
let names = [];                        // tablica z obiektami 

fs.readFile('./src/data/names.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //podział łańcucha z imionami na wiersze.
    names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);
    console.log(names);
    let content = "export const data = [\n";
    for(let i = 0; i < count; i++){
        //losowanie imienia z bilioteki imion
        content += `  {\n`;
        content += `\tid: ${i + 1},\n`;
        content += `\tname: "${names[~~((Math.random() * names.length) / 1)]}",\n`;
        content += `\tbirth: "${generateRandomBirthDay()}",\n`;
        content += `\teyes: "${generateRandomEyeColor()}"\n`;
        content += `  },\n`
    }
    content += "];"
    //zapis łańcucha do pliku 
    fs.writeFile('./src/data/module-data.js', content, (err) => {
        if (err) {
           console.error(err);
        }
        console.log("module-data.js generated");
       });
});

function generateRandomBirthDay() {
    const start = new Date(1980, 0, 1);
    const end = new Date(2010, 11, 31); 
    
    const randomBirthDay = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

    const year = randomBirthDay.getFullYear();
    const month = String(randomBirthDay.getMonth() + 1).padStart(2, '0');
    const day = String(randomBirthDay.getDate()).padStart(2, '0');
    
    return `${year}-${month}-${day}`;
}

function generateRandomEyeColor() {
    const eyeColors = ['brown', 'blue', 'green', 'hazel', 'grey']; 
    const randomIndex = Math.floor(Math.random() * eyeColors.length); 
    return eyeColors[randomIndex];
}