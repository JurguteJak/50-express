import express from 'express';
import { members } from '../data/members.js';
import { servicesData } from '../data/servicesData.js';

export const serviceMemberRouter = express.Router({
    mergeParams: true,
});

serviceMemberRouter.get('/', (req, res) => {
    if (servicesData.includes(req.params.serviceName)) {
        return res.send(`Paslaugos "${req.params.serviceName}" nariu sarasas.`)
    }
    return res.send('Services page: such service is not recognized');
});

serviceMemberRouter.get('/:memberName', (req, res) => {
    const { memberName, serviceName } = req.params;

    if (!servicesData.includes(serviceName)) {
        return res.send('Services page: such service is not recognized');
    }

    if (!members.includes(memberName)) {
        return res.send(`Paslaugoje "${serviceName}" nario "${memberName}" nepavyko rasti...`);
    }

    return res.send(`Paslaugos "${serviceName}" nario "${memberName}" informacija.`);
});

