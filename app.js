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

app.get("/random/quotes", (req, res) => {
    return res.json(quotes);
});

app.get("/random/quotes/random", (req, res) => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return res.json({ quote: quotes[randomIndex] });
});

app.post("/random/quotes", (req, res) => {
    const newQuote = req.body.quote;
    if (newQuote) {
        quotes.push(newQuote);
        return res.status(201).json({ message: "Cita agregada", quote: newQuote });
    } else {
        return res.status(400).json({ error: "Cita no proporcionada" });
    }
}); 





app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
