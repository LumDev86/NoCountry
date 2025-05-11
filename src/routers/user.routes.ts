import { Router } from 'express';
import { createUserController, getAllUsersController } from '../controllers/user.controller';

const userRouter = Router();


/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Endpoints relacionados con usuarios
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuario creado correctamente
 */
userRouter.post('/', createUserController);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 */
userRouter.get('/', getAllUsersController);

export default userRouter;
