import express from 'express';
import { createMessageController, getMessagesByChatController, getMessagesByUserController, markMessageAsReadController,getMessagesByChatTypeController, getUnreadMessagesController, getRepliesToMessageController } from '../controllers/message.controller';

const messageRoutes = express.Router();

messageRoutes.post('/', createMessageController);
messageRoutes.get('/chat/:chatId', getMessagesByChatController);
messageRoutes.get('/user/:userId', getMessagesByUserController);
messageRoutes.patch('/:messageId/read', markMessageAsReadController);
messageRoutes.get('/chatType/:chatType', getMessagesByChatTypeController);
messageRoutes.get('/:messageId/replies', getRepliesToMessageController);
messageRoutes.get('/unread/:userId', getUnreadMessagesController);

export default messageRoutes;
