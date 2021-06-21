import {Router} from 'express';
const router = Router();

//router.get('/test', (req, res) => res.send('hola') )
import {getUsers, getUsersbyId, createUser} from '../controllers/index.controller'

router.get('/users', getUsers);

router.get('/users/:id', getUsersbyId);
router.post('/users', createUser);
// router.put('/users/:id', getUsers);
//router.delete('/users/:id', getUsers);

export default router;