import { Request, Response } from 'express';
import { ChatType } from '@prisma/client';
import { createMessage, getMessagesByChat, getMessagesByUser, markMessageAsRead, getMessagesByChatType, getRepliesToMessage, getUnreadMessagesForUser } from '../services/message.service';
import ControllerHandler from '../handler/controller.hendler';

// Crear mensaje
export const createMessageController = async (req: Request, res: Response) => {
  try {
    const { content, senderId, chatId, replyToId } = req.body;

    const message = await createMessage(content, senderId, chatId, replyToId);
    ControllerHandler.created("Mensaje creado correctamente", message, res);
  } catch (error: unknown) {
    // Verificamos que el error sea una instancia de Error
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

// Obtener mensajes por chat
export const getMessagesByChatController = async (req: Request, res: Response) => {
  try {
    const { chatId } = req.params;
    const messages = await getMessagesByChat(chatId);
    ControllerHandler.ok("Mensajes obtenidos correctamente", res, messages);
  } catch (error: unknown) {
    // Verificamos que el error sea una instancia de Error
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

// Obtener mensajes por usuario
export const getMessagesByUserController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const messages = await getMessagesByUser(userId);
    ControllerHandler.ok("Mensajes del usuario obtenidos correctamente", res, messages);
  } catch (error: unknown) {
    // Verificamos que el error sea una instancia de Error
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

// Marcar mensaje como leído
export const markMessageAsReadController = async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;
    const updated = await markMessageAsRead(messageId);
    ControllerHandler.ok("Mensaje marcado como leído", res, updated);
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

// Obtener mensajes por tipo de chat
export const getMessagesByChatTypeController = async (req: Request, res: Response) => {
  try {
    const type = req.params.chatType as ChatType;
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const messages = await getMessagesByChatType(type, page, limit);
    ControllerHandler.ok("Mensajes por tipo de chat obtenidos", res, { page, limit, data: messages });
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

// Obtener respuestas a un mensaje
export const getRepliesToMessageController = async (req: Request, res: Response) => {
  try {
    const { messageId } = req.params;
    const replies = await getRepliesToMessage(messageId);
    ControllerHandler.ok("Respuestas obtenidas correctamente", res, replies);
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

// Obtener mensajes no leídos
export const getUnreadMessagesController = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const messages = await getUnreadMessagesForUser(userId);
    ControllerHandler.ok("Mensajes no leídos obtenidos", res, messages);
  } catch (error: unknown) {
    if (error instanceof Error) {
      ControllerHandler.badRequest(error.message, res);
    } else {
      ControllerHandler.badRequest("Error desconocido", res);
    }
  }
};

