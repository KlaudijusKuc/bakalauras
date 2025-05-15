import { PrismaClient } from '@prisma/client';

// sukuria singleton prismos kliento instancija
const prismaClientSingleton = () => {
  return new PrismaClient();
};

// cachina prisomos instancija kad isvengti per daug prisijungimu
const globalForPrisma = globalThis;
export const prisma = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
} 