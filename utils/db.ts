import { PrismaClient } from "@prisma/client";

const singleton = () => new PrismaClient();

type PrismaClientSingleton = ReturnType<typeof singleton>;

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalForPrisma.prisma ?? singleton();

export default prisma;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
