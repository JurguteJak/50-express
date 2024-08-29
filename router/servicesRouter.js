import express from 'express';
import { servicesData } from '../data/servicesData.js';
import { serviceMemberRouter } from './serviceMembersRouter.js';

export const servicesRouter = express.Router();

servicesRouter.get('/', (req, res) => {
    return res.send('Services page');
});

servicesRouter.get('/:serviceName', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`About "${req.params.serviceName}" service...`)
    }
    return res.send('Services page: such service is not recognized');
});

servicesRouter.use('/:serviceName/members', serviceMemberRouter);
