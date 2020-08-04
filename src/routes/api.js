import { Router } from 'express';

import PersonController from '../app/controllers/PersonController';

import PersonCreateValidator from '../app/validators/PersonCreateValidator';
import PersonUpdateValidator from '../app/validators/PersonUpdateValidator';

const route = Router()

route.get('/people', PersonController.findAll)

route.get('/person/:id', PersonController.findById)

route.post('/person', PersonCreateValidator,  PersonController.create)

route.put('/person', PersonUpdateValidator, PersonController.update)

route.delete('/person/:id', PersonController.delete)

export default route