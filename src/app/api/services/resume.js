import prisma from "@/libs/db";

export const resume = {
  create: async ({ userId, originalId, fileName, resumeContent }) => {
    return await prisma.resume.create({
      data: {
        user: {
          connect: {
            userId: Number(userId)
          }
        },
        original: {
          connect: {
            originalId
          }
        },
        name: "resume-" + fileName,
        resumeContent
      }
    });
    await prisma.$disconnect();
  },
  findResumeById: async (id) => {
    return prisma.resume.findMany({
      where:{
        authorId: Number(id)
      }
    });
    await prisma.$disconnect();
  },
  delete: async (id) => {
    return prisma.resume.delete({
      where: {
        resumeId: Number(id)
      }
    });
    await prisma.$disconnect();
  }
};
