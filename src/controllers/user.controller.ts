import { Request, Response } from 'express';
import { createUser, getAllUsers } from '../services/user.service';
import ControllerHandler from '../handler/controller.hendler';

export const getAllUsersController = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const users = await getAllUsers(page, limit);
    ControllerHandler.ok("Usuarios obtenidos correctamente", res, { page, limit, data: users });
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

export const createUserController = async (req: Request, res: Response) => {
  try {
    const { email, name } = req.body;
    const user = await createUser(email, name);
    ControllerHandler.created("Usuario creado correctamente", user, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

