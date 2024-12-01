const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());

app.use(express.json());

app.get('/generate-data', (req, res) => {
    const count = Number(req.query.count) || 10;
    let names = [];

    fs.readFile('./names.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send({ error: 'Error reading names file' });
        }
        names = data.split("\n").map(s => s.trim()).filter(n => n.length != 0);

        const people = [];
        for (let i = 0; i < count; i++) {
            people.push({
                id: i + 1,
                name: names[Math.floor(Math.random() * names.length)],
                birth: generateRandomBirthDay(),
                eyes: generateRandomEyeColor()
            });
        }

        res.json(people);
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
    return eyeColors[Math.floor(Math.random() * eyeColors.length)];
}

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
