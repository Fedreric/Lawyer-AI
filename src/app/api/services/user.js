import prisma from "@/libs/db";

export const user = {
  findOneUser: async (id) => {
    return prisma.user.findFirst({
      where: {
        userId: Number(id)
      }
    });
  },
  update: ({ name, email, password, id }) => {
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
  },
  delete:(id) => {
    return prisma.user.delete({
      where: {
        userId: Number(id)
      }
    });
  }
};
