import prisma from "@/libs/db";

export const user = {
  findOneUser: async (id) => {
    return prisma.user.findFirst({
      where: {
        userId: Number(id)
      }
    });
    await prisma.$disconnect();
  },
  update: async ({ name, email, password, id }) => {
    return prisma.user.update({
      where: {
        userId: Number(id)
      },
      data: {
        name,
        email,
        password
      }
    });
    await prisma.$disconnect();
  },
  delete: async (id) => {
    return prisma.user.delete({
      where: {
        userId: Number(id)
      }
    });
    await prisma.$disconnect();
  }
};
