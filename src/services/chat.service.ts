import { prisma } from '../config/prismaClient';

export const getAllChats = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  return await prisma.chat.findMany({
    skip,
    take: limit,
    orderBy: { createdAt: 'desc' },
    include: {
      participants: { include: { user: true } },
      messages: true,
    },
  });
};

export const createChatWithParticipants = async (
  type: 'ONE_ON_ONE' | 'GROUP' | 'SUBGROUP',
  name: string | null,
  participantIds: string[]
) => {
  try {
    const chat = await prisma.chat.create({
      data: {
        type,
        name,
        participants: {
          create: participantIds.map((userId) => ({
            user: { connect: { id: userId } }
          }))
        }
      },
      include: {
        participants: true
      }
    });

    return chat;
  } catch (error) {
    console.error("❌ Error al crear el chat:", error);
    throw new Error("Error al crear el chat");
  }
};
