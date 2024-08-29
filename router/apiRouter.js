import express from 'express';

export const apiRouter = express.Router();

// GET: /api/
apiRouter.get('/', (req, res) => {
    const data = {
        state: 'error',
        message: 'Nurodyk konkretu API endpoint\' a',
    };
    return res.json(data);                    // supaprastintas
    // return res.send(JSON.stringify(data));
});

const marks = [];

apiRouter.get('/my-marks', (req, res) => {
    return res.json(marks);
});

apiRouter.post('/my-marks', (req, res) => {
    console.log(req.body);

    marks.push(req.body.mark);
    return res.json({
        state: 'success',
        message: 'Pazymys pridetas',
    });
});

// /my-marks/:index/:newMark
// /my-marks -> {index: 0, newMark: 10}

// /my-marks/:index -> {newMark: 10}
apiRouter.put('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);
    const newMarkValue = req.body.newMark;

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymio pozicija (index) turi buti ne neigiamas sveikasis skaicius',
        });
    }

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas ir taip jau yra tuscias...nera ko redaguoti',
        });
    }

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `Norimo salinti pazymio indexas negali virsyti leistinos 
            ribos(riba: ${marks.length - 1}).`,
        });
    }

    marks[position] = newMarkValue;

    return res.json({
        state: 'success',
        message: 'Pazymys paredaguotas',
    });
});

apiRouter.delete('/my-marks/:index', (req, res) => {
    const { index } = req.params;
    const position = parseFloat(index);

    if (!Number.isInteger(position) || position < 0) {
        return res.json({
            state: 'error',
            message: 'Pazymio pozicija(index) turi buti ne neigiamas sveikasis skaicius',
        });
    }

    if (marks.length === 0) {
        return res.json({
            state: 'error',
            message: 'Pazymiu sarasas ir taip jau yra tuscias...nera ko papildomai pasalinti',
        });
    }

    if (position >= marks.length) {
        return res.json({
            state: 'error',
            message: `Norimo salinti pazymio indexas negali virsyti leistinos 
            ribos(riba: ${marks.length - 1}).`,
        });
    }

    marks.splice(position, 1);

    return res.json({
        state: 'success',
        message: 'Pazymys pasalintas',
    });
});