import { Request, Response } from 'express';
import { createChatWithParticipants, getAllChats } from '../services/chat.service';
import ControllerHandler from '../handler/controller.hendler';

export const getAllChatsController = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const chats = await getAllChats(page, limit);
    ControllerHandler.ok("Chats obtenidos correctamente", res, { page, limit, data: chats });
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

export const createChatController = async (req: Request, res: Response) => {
  try {
    const { type, name, participantIds } = req.body;

    console.log("Datos recibidos:", { type, name, participantIds });

    const newChat = await createChatWithParticipants(type, name, participantIds);
    ControllerHandler.created("Chat creado correctamente", newChat, res);
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};
