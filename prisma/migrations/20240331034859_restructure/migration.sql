/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `courseReqId` on the `Course` table. All the data in the column will be lost.
  - The `id` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `feedbackId` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `schedulteId` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `courseExpectId` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `coursecSectionId` column on the `Course` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CourseEnroll` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CourseEnroll` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CourseExpectation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CourseExpectation` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CourseRequirement` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CourseRequirement` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CourseSchedule` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CourseSchedule` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `CoursecSection` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `CoursecSection` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `Instructor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `Instructor` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `course_feedbacks` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `course_feedbacks` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `instructorId` on the `Course` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `enrolledCourseId` on the `CourseEnroll` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `feedbackId` on the `course_feedbacks` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `followings` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `authorId` on the `posts` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `userId` on the `profile` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `requestedId` on the `request_friends` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `requesterId` on the `request_friends` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_courseExpectId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_courseReqId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_coursecSectionId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_feedbackId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_schedulteId_fkey";

-- DropForeignKey
ALTER TABLE "CourseEnroll" DROP CONSTRAINT "CourseEnroll_enrolledCourseId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "courseReqId",
ADD COLUMN     "courseRequireId" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "instructorId",
ADD COLUMN     "instructorId" INTEGER NOT NULL,
DROP COLUMN "feedbackId",
ADD COLUMN     "feedbackId" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "schedulteId",
ADD COLUMN     "schedulteId" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "courseExpectId",
ADD COLUMN     "courseExpectId" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "coursecSectionId",
ADD COLUMN     "coursecSectionId" INTEGER NOT NULL DEFAULT 0,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CourseEnroll" DROP CONSTRAINT "CourseEnroll_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "enrolledCourseId",
ADD COLUMN     "enrolledCourseId" INTEGER NOT NULL,
ADD CONSTRAINT "CourseEnroll_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CourseExpectation" DROP CONSTRAINT "CourseExpectation_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CourseExpectation_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CourseRequirement" DROP CONSTRAINT "CourseRequirement_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CourseRequirement_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CourseSchedule" DROP CONSTRAINT "CourseSchedule_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CourseSchedule_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "CoursecSection" DROP CONSTRAINT "CoursecSection_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "CoursecSection_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Instructor" DROP CONSTRAINT "Instructor_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Instructor_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "course_feedbacks" DROP CONSTRAINT "course_feedbacks_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
DROP COLUMN "feedbackId",
ADD COLUMN     "feedbackId" INTEGER NOT NULL,
ADD CONSTRAINT "course_feedbacks_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "followings" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "posts" DROP COLUMN "authorId",
ADD COLUMN     "authorId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "profile" DROP COLUMN "userId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "request_friends" DROP COLUMN "requestedId",
ADD COLUMN     "requestedId" INTEGER NOT NULL,
DROP COLUMN "requesterId",
ADD COLUMN     "requesterId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CourseDetail" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "tag" "Tags"[],
    "course_level" TEXT NOT NULL,
    "assistant" TEXT,
    "imagePath" TEXT,
    "duration" INTEGER NOT NULL,
    "certify" BOOLEAN NOT NULL DEFAULT false,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "favorited" BOOLEAN NOT NULL DEFAULT false,
    "instructorId" INTEGER NOT NULL,
    "feedbackId" INTEGER NOT NULL,
    "schedulteId" INTEGER NOT NULL,
    "courseExpectId" INTEGER NOT NULL,
    "courseReqId" INTEGER NOT NULL,
    "coursecSectionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CourseDetail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "profile_userId_key" ON "profile"("userId");

-- AddForeignKey
ALTER TABLE "request_friends" ADD CONSTRAINT "request_friends_requesterId_fkey" FOREIGN KEY ("requesterId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "request_friends" ADD CONSTRAINT "request_friends_requestedId_fkey" FOREIGN KEY ("requestedId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "followings" ADD CONSTRAINT "followings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posts" ADD CONSTRAINT "posts_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD CONSTRAINT "CourseDetail_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "Instructor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD CONSTRAINT "CourseDetail_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "course_feedbacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD CONSTRAINT "CourseDetail_schedulteId_fkey" FOREIGN KEY ("schedulteId") REFERENCES "CourseSchedule"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD CONSTRAINT "CourseDetail_courseExpectId_fkey" FOREIGN KEY ("courseExpectId") REFERENCES "CourseExpectation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD CONSTRAINT "CourseDetail_courseReqId_fkey" FOREIGN KEY ("courseReqId") REFERENCES "CourseRequirement"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD CONSTRAINT "CourseDetail_coursecSectionId_fkey" FOREIGN KEY ("coursecSectionId") REFERENCES "CoursecSection"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_feedbacks" ADD CONSTRAINT "course_feedbacks_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CourseEnroll" ADD CONSTRAINT "CourseEnroll_enrolledCourseId_fkey" FOREIGN KEY ("enrolledCourseId") REFERENCES "CourseDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
