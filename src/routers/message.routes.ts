import express from 'express';
import { createMessageController, getMessagesByChatController, getMessagesByUserController, markMessageAsReadController,getMessagesByChatTypeController, getUnreadMessagesController, getRepliesToMessageController } from '../controllers/message.controller';

const messageRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Messages
 *   description: Endpoints relacionados con mensajes
 */

/**
 * @swagger
 * /messages:
 *   post:
 *     summary: Crear un nuevo mensaje
 *     tags: [Messages]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               chatId:
 *                 type: string
 *               senderId:
 *                 type: string
 *               content:
 *                 type: string
 *     responses:
 *       201:
 *         description: Mensaje creado correctamente
 */
messageRoutes.post('/', createMessageController);

/**
 * @swagger
 * /messages/chat/{chatId}:
 *   get:
 *     summary: Obtener mensajes por ID de chat
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: chatId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de mensajes
 */
messageRoutes.get('/chat/:chatId', getMessagesByChatController);

/**
 * @swagger
 * /messages/user/{userId}:
 *   get:
 *     summary: Obtener mensajes por ID de usuario
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de mensajes del usuario
 */
messageRoutes.get('/user/:userId', getMessagesByUserController);

/**
 * @swagger
 * /messages/{messageId}/read:
 *   patch:
 *     summary: Marcar mensaje como leído
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: messageId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Mensaje marcado como leído
 */
messageRoutes.patch('/:messageId/read', markMessageAsReadController);

/**
 * @swagger
 * /messages/chatType/{chatType}:
 *   get:
 *     summary: Obtener mensajes por tipo de chat ONE_ON_ONE - GROUP - SUBGROUP
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: chatType
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de mensajes
 */
messageRoutes.get('/chatType/:chatType', getMessagesByChatTypeController);

/**
 * @swagger
 * /messages/{messageId}/replies:
 *   get:
 *     summary: Obtener respuestas de un mensaje
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: messageId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Respuestas del mensaje
 */
messageRoutes.get('/:messageId/replies', getRepliesToMessageController);

/**
 * @swagger
 * /messages/unread/{userId}:
 *   get:
 *     summary: Obtener mensajes no leídos de un usuario
 *     tags: [Messages]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de mensajes no leídos
 */
messageRoutes.get('/unread/:userId', getUnreadMessagesController);


export default messageRoutes;
