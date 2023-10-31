import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
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