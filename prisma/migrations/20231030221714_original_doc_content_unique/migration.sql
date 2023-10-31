/*
  Warnings:

  - A unique constraint covering the columns `[original_content]` on the table `original_doc` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "original_doc_original_content_key" ON "original_doc"("original_content");
