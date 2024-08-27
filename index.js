import express from 'express';

const app = express();
const port = 3000;

//req - request, res- response
app.get('/', (req, res) => {
    return res.send('Labas rytas tau!');
});

app.get('/about', (req, res) => {
    return res.send('Nori suzinoti apie si projekta?');
});

app.get('*', (req, res) => {
    return res.send('puslapis nerastas 🛸!');
});


app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});