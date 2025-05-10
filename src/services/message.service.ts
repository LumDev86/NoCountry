import { prisma } from '../config/prismaClient';
import { Message } from '@prisma/client';
import { ChatType } from '@prisma/client';

// Crear mensaje
export const createMessage = async (content: string, senderId: string, chatId: string, replyToId?: string) => {
  try {
    const message = await prisma.message.create({
      data: {
        content,
        senderId,
        chatId,
        replyToId,
      },
    });
    return message;
  } catch (error) {
    console.error("❌ Error real al guardar el mensaje:", error); // <-- IMPORTANTE
    throw new Error('Error al guardar el mensaje');
  }
};

// Obtener mensajes por chat
export const getMessagesByChat = async (chatId: string): Promise<Message[]> => {
  try {
    const messages = await prisma.message.findMany({
      where: { chatId },
      orderBy: { timestamp: 'asc' }, // Ordenar por timestamp
      include: { sender: true }, // Incluir datos del usuario que envió el mensaje
    });
    return messages;
  } catch (error) {
    throw new Error('Error al obtener los mensajes del chat');
  }
};

// Obtener mensajes por usuario
export const getMessagesByUser = async (userId: string): Promise<Message[]> => {
  try {
    const messages = await prisma.message.findMany({
      where: { senderId: userId },
      orderBy: { timestamp: 'asc' },
      include: { chat: true }, // Incluir datos del chat
    });
    return messages;
  } catch (error) {
    throw new Error('Error al obtener los mensajes del usuario');
  }
};

// Servicio para marcar mensaje como leído
export const markMessageAsRead = async (messageId: string) => {
  try {
    const updatedMessage = await prisma.message.update({
      where: { id: messageId },
      data: { isRead: true }
    });
    return updatedMessage;
  } catch (error) {
    console.error("❌ Error al marcar mensaje como leído:", error);
    throw new Error("Error al actualizar estado de lectura");
  }
};

// Obtener mensajes por tipo de chat
export const getMessagesByChatType = async (type: ChatType, page: number, limit: number) => {
  const skip = (page - 1) * limit;
  return await prisma.message.findMany({
    where: {
      chat: { type }
    },
    skip,
    take: limit,
    orderBy: { timestamp: 'desc' },
    include: {
      sender: true,
      chat: true,
      replyTo: true,
    },
  });
};

// Ver respuesta a un mensaje
export const getRepliesToMessage = async (messageId: string) => {
  return await prisma.message.findMany({
    where: { replyToId: messageId },
    orderBy: { timestamp: 'asc' },
    include: { sender: true }
  });
};

// Ver cuantos mensajes no leídos tiene un usuario
export const getUnreadMessagesForUser = async (userId: string) => {
  return await prisma.message.findMany({
    where: {
      isRead: false,
      NOT: { senderId: userId }, // Solo mensajes que no envió el usuario
      chat: {
        participants: {
          some: { userId }
        }
      }
    },
    include: { sender: true, chat: true },
    orderBy: { timestamp: 'desc' }
  });
};
