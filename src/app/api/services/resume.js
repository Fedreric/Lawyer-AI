import prisma from "@/libs/db";

export const resume = {
    create: async ({userId, originalId, fileName, resumeContent }) =>{
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
              name: "resume_" + fileName,
              resumeContent
            }
          });
    }  
    
}