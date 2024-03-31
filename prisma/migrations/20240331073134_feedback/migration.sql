/*
  Warnings:

  - You are about to drop the column `detail` on the `course_feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `feedbackBy` on the `course_feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `feedbackCourseId` on the `course_feedbacks` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `course_feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `course_feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedbackDetail` to the `course_feedbacks` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "course_feedbacks" DROP COLUMN "detail",
DROP COLUMN "feedbackBy",
DROP COLUMN "feedbackCourseId",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "feedbackDetail" TEXT NOT NULL;
