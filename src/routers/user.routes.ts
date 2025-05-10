import { Router } from 'express';
import { createUserController, getAllUsersController } from '../controllers/user.controller';

const userRouter = Router();

userRouter.post('/', createUserController);
userRouter.get('/', getAllUsersController);

export default userRouter;
