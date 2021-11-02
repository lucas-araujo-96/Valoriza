import {Router} from 'express';
import {CreateUserController} from '../controllers/CreateUserController';
import {CreateTagController} from '../controllers/CreateTagController';
import {ensureAdmin} from '../middlewares/ensureAdmin';
import { AuthenticateUserController } from '../controllers/AuthenticateUserController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const authenticateUserController = new AuthenticateUserController();

router.get('/user', authenticateUserController.handle);
router.post('/user', createUserController.handle);
router.post('/tag', ensureAdmin, createTagController.handle);

export {router};
