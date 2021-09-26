import {Router} from 'express';
import {CreateUserController} from '../controllers/CreateUserController';
import {CreateTagController} from '../controllers/CreateTagController';
import {ensureAdmin} from '../middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();

router.post('/user', createUserController.handle);
router.post('/tag', ensureAdmin, createTagController.handle);

export {router};
