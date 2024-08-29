import express from 'express';

export const booksRouter = express.Router();

booksRouter.get('/', (req, res) => {
    return res.send('GET: books');
});

booksRouter.post('/', (req, res) => {
    return res.send('POST: books');
});

booksRouter.put('/', (req, res) => {
    return res.send('PUT: books');
});

booksRouter.delete('/', (req, res) => {
    return res.send('DELETE: books');
});