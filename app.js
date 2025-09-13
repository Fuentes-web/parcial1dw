const express = require ("express");
const app = express();
const port = 3127;


app.use(express.json());

let quotes = [
    "La vida es lo que sucede mientras estás ocupado haciendo otros planes. - John Lennon",
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier",
    "No cuentes los días, haz que los días cuenten. - Muhammad Ali",
    "La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
    "El futuro pertenece a quienes creen en la belleza de sus sueños. - Eleanor Roosevelt"
];  

app.get("/convert/celsius-to-fahrenheit/:value", (req, res) => {
    const celsius = parseFloat(req.params.value);
    const fahrenheit = (celsius * 9/5) + 32;
    return res.json({ fahrenheit: fahrenheit });
});

app.get("/convert/fahrenheit-to-celsius/:value", (req, res) => {
    const fahrenheit = parseFloat(req.params.value);
    const celsius = (fahrenheit - 32) * 5/9;
    return res.json({ celsius: celsius });
});

app.get("/convert/km-to-miles/:value", (req, res) => {
    const km = parseFloat(req.params.value);
    const miles = km * 0.621371;
    return res.json({ miles: miles });
});


app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
