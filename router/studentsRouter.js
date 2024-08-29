import express from 'express';
import { students } from '../data/students.js';

export const studentsRouter = express.Router();

studentsRouter.get('/', (req, res) => {
    // const names = [];
    // for(const key in students) {
    //     names.push(students[key].name);
    // }

    const names = Object.values(students).map(student => student.name);

    if (names.length === 0) {
        return res.send(`Mokosi ${names.length} studentai: niekas.`);
    }

    if (names.length === 1) {
        return res.send(`Mokosi ${names.length} studentai: ${names[0]}.`);
    }

    const str = names.slices(0, -1).join(', ') + ' ir ' + names.at(-1);
    return res.send(`Mokosi ${names.length} studentai: ${str}.`);
});

studentsRouter.get('/:name', (req, res) => {
    const name = req.params.name.toLowerCase();
    let student = null;

    for (const key in students) {
        if (key.toLowerCase() === name) {
            student = students[key];
            break;
        }
    }

    if (student) {
        return res.send(`Studentas, vardu ${student.name} yra ${student.age} 
            metu amziaus ir ${student.isMarried ? 'yra' : 'nera'} vedes.`);
    } else {
        return res.send(`Studento, vardu ${req.params.name} nera.`);
    }
});