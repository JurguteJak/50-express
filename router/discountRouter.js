import express from 'express';

export const discountRouter = express.Router();

discountRouter.get('/', (req, res) => {
    return res.send('Nuolaidu puslapis');
});

discountRouter.get('/vasaros-nuolaida', (req, res) => {
    return res.send('Vasaros nuolaidos puslapis');
});

discountRouter.get('/rudens-nuolaida', (req, res) => {
    return res.send('Rudens nuolaidos puslapis');
});

discountRouter.get('/ziemos-nuolaida', (req, res) => {
    return res.send('Ziemos nuolaidos puslapis');
});

discountRouter.get('/pavasario-nuolaida', (req, res) => {
    return res.send('Pavasario nuolaidos puslapis');
});

discountRouter.get('/*', (req, res) => {
    return res.send('Gaila, tokia nuolaida neveikia');
});