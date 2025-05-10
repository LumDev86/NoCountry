import { prisma } from '../config/prismaClient';
import { User } from '@prisma/client';

// Obtener usuarios
export const getAllUsers = async (page: number, limit: number) => {
  const skip = (page - 1) * limit;
  return await prisma.user.findMany({
    skip,
    take: limit,
    orderBy: { createdAt: 'desc' },
  });
};

// Crear usuario
export const createUser = async (email: string, name: string): Promise<User> => {
  try {
    const user = await prisma.user.create({
      data: { email, name },
    });
    return user;
  } catch (error) {
    throw new Error('Error al crear el usuario');
  }
};
