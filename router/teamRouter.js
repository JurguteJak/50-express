import express from 'express';

export const teamRouter = express.Router();

teamRouter.get('/', (req, res) => {
    return res.send('Team page');
});

teamRouter.get('/:name', (req, res) => {
    const members = ['chuck', 'lolo', 'zoro', 'pepe'];

    if (members.includes(req.params.name)) {
        return res.send(`Team member: "${req.params.name}" all info about this person.`);
    }
    return res.send(`Team member "${req.params.name}" page not found.`);
});