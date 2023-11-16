-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "resume" (
    "resume_id" SERIAL NOT NULL,
    "author_id" INTEGER NOT NULL,
    "original_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "resume_content" TEXT NOT NULL,

    CONSTRAINT "resume_pkey" PRIMARY KEY ("resume_id")
);

-- CreateTable
CREATE TABLE "original_doc" (
    "original_id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "original_content" TEXT NOT NULL,

    CONSTRAINT "original_doc_pkey" PRIMARY KEY ("original_id")
);

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resume" ADD CONSTRAINT "resume_original_id_fkey" FOREIGN KEY ("original_id") REFERENCES "original_doc"("original_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "original_doc" ADD CONSTRAINT "original_doc_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
