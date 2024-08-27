import express from 'express';
import { servicesData } from './data/servicesData.js';
import { members } from './data/members.js';

const app = express();
const port = 3000;

app.get('/', (req, res) => {                      //req - request, res- response
    return res.send('Home page');
});

app.get('/about', (req, res) => {
    return res.send('About page');
});

app.get('/services', (req, res) => {
    return res.send('Services page');
});

app.get('/services/:serviceName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`About "${req.params.serviceName}" service...`)
    }
    return res.send('Services page: such service is not recognized');
});

app.get('/services/:serviceName/members', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`Paslaugos "${req.params.serviceName}" nariu sarasas.`)
    }
    return res.send('Services page: such service is not recognized');
});

app.get('/services/:serviceName/members/:memberName', (req, res) => {
    // const serviceName = req.params.serviceName;
    // const memberName = req.params.memberName;

    const { memberName, serviceName } = req.params;       //DESTRUKTURIZAVIMAS

    //     if (servicesData.includes(serviceName)) {
    //         if (members.includes(memberName)) {
    //             return res.send(`Paslaugos "${serviceName}" nario "${memberName}" informacija.`);
    //         }
    //         return res.send(`Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rasti...`);
    //     }
    //     return res.send('Services page: such service is not recognized');
    // });

    // GERESNIS VARIANTAS PER NEIGIAMA KLAUSIMA, NES BAIGIA DARBA, JEI NEATITINKA KAZKO IR NEINA TOLIAU
    if (!servicesData.includes(serviceName)) {
        return res.send('Services page: such service is not recognized');
    }

    if (!members.includes(memberName)) {
        return res.send(`Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rasti...`);
    }

    return res.send(`Paslaugos "${serviceName}" nario "${memberName}" informacija.`);
});

app.get('/team', (req, res) => {
    return res.send('Team page');
});

// sutrumpintas variantas kai yra daug nariu
app.get('/team/:name', (req, res) => {
    const members = ['chuck', 'lolo', 'zoro', 'pepe'];

    if (members.includes(req.params.name)) {
        return res.send(`Team member: "${req.params.name}" all info about this person.`);
    }
    return res.send(`Team member "${req.params.name}" page not found.`);
});

app.get('/img', (req, res) => {
    return res.send('Images...');
});

app.get('/img/logo.png', (req, res) => {
    return res.send('Images: logo.png turinys... :P');
});

// su * visa kita, bet tik gale naudojamas, nes pagaus viska ko nereikia
app.get('*', (req, res) => {
    return res.send('Ups... 404 page 🛸');
});

app.listen(port, () => {
    console.log(`App running on: http://localhost:${port}`);
});