/*
  Warnings:

  - A unique constraint covering the columns `[fk_id_course]` on the table `courses` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "courses" ADD COLUMN     "fk_id_course" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "courses_fk_id_course_key" ON "courses"("fk_id_course");

-- AddForeignKey
ALTER TABLE "courses" ADD CONSTRAINT "courses_fk_id_course_fkey" FOREIGN KEY ("fk_id_course") REFERENCES "modules"("id") ON DELETE SET NULL ON UPDATE CASCADE;
