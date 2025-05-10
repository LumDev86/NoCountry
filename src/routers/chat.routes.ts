import { Router } from 'express';
import { createChatController, getAllChatsController } from '../controllers/chat.controller';

const chatRouter = Router();

chatRouter.post('/', createChatController);
chatRouter.get('/', getAllChatsController);

export default chatRouter;
