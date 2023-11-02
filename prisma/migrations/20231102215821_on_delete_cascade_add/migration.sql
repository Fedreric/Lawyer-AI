-- DropForeignKey
ALTER TABLE "original_doc" DROP CONSTRAINT "original_doc_user_id_fkey";

-- DropForeignKey
ALTER TABLE "resume" DROP CONSTRAINT "resume_author_id_fkey";

-- DropForeignKey
ALTER TABLE "resume" DROP CONSTRAINT "resume_original_id_fkey";

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_original_id_fkey" FOREIGN KEY ("original_id") REFERENCES "original_doc"("original_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "original_doc" ADD CONSTRAINT "original_doc_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
