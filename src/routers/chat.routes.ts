import { Router } from 'express';
import { createChatController, getAllChatsController } from '../controllers/chat.controller';

const chatRouter = Router();

/**
 * @swagger
 * tags:
 *   name: Chats
 *   description: Endpoints relacionados con chats
 */

/**
 * @swagger
 * /chats:
 *   post:
 *     summary: Crear un nuevo chat
 *     tags: [Chats]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               participants:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Chat creado correctamente
 */
chatRouter.post('/', createChatController);

/**
 * @swagger
 * /chats:
 *   get:
 *     summary: Obtener todos los chats
 *     tags: [Chats]
 *     responses:
 *       200:
 *         description: Lista de chats
 */
chatRouter.get('/', getAllChatsController);

export default chatRouter;
