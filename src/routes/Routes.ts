import {Router} from 'express';
import {CreateUserController} from '../controllers/CreateUserController';
import {CreateTagController} from '../controllers/CreateTagController';
import {ensureAdmin} from '../middlewares/ensureAdmin';
import {AuthenticateUserController}
  from '../controllers/AuthenticateUserController';
import {CreateComplimentController}
  from '../controllers/CreateComplimentController';
import {ensureLogged} from '../middlewares/ensureLogged';
import {ListUserComplimentsController}
  from '../controllers/ListUserComplimentsController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();
const createComplimentController = new CreateComplimentController();
const listUserComplimentsController = new ListUserComplimentsController();

router.get('/user', authenticateUserController.handle);
router.post('/user', createUserController.handle);
router.post('/tag', ensureLogged, ensureAdmin, createTagController.handle);
router.post('/compliment', ensureLogged, createComplimentController.handle);
router.get('/compliment', ensureLogged, listUserComplimentsController.handle);

export {router};
