/*
  Warnings:

  - You are about to drop the column `course_level` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `course_level` on the `CourseDetail` table. All the data in the column will be lost.
  - You are about to drop the column `course_end_date` on the `CourseExpectation` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `CourseExpectation` table. All the data in the column will be lost.
  - You are about to drop the column `course_start_date` on the `CourseExpectation` table. All the data in the column will be lost.
  - You are about to drop the column `course_end_date` on the `CourseRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `CourseRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `course_start_date` on the `CourseRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `course_end_date` on the `CourseSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `course_id` on the `CourseSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `course_start_date` on the `CourseSchedule` table. All the data in the column will be lost.
  - You are about to drop the column `course_end_date` on the `CoursecSection` table. All the data in the column will be lost.
  - You are about to drop the column `course_start_date` on the `CoursecSection` table. All the data in the column will be lost.
  - You are about to drop the column `birth_date` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `contact_address` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `contact_email` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `contact_mobile` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `contact_phone` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `first_name` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `last_name` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `national_id` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `feedbackId` on the `course_feedbacks` table. All the data in the column will be lost.
  - You are about to drop the column `feedback_datetime` on the `course_feedbacks` table. All the data in the column will be lost.
  - You are about to drop the `InstructorDetail` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `courseLevel` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `Course` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseLevel` to the `CourseDetail` table without a default value. This is not possible if the table is not empty.
  - Added the required column `enrooledUserId` to the `CourseEnroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleId` to the `CourseEnroll` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseEndDate` to the `CourseExpectation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `CourseExpectation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseStartDate` to the `CourseExpectation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseEndDate` to the `CourseRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `CourseRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseStartDate` to the `CourseRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseEndDate` to the `CourseSchedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseId` to the `CourseSchedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseStartDate` to the `CourseSchedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `scheduleBy` to the `CourseSchedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseEndDate` to the `CoursecSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `courseStartDate` to the `CoursecSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `birthDate` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactAddress` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactEmail` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactMobile` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `contactPhone` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `firstName` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastName` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationalId` to the `Instructor` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedbackBy` to the `course_feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `feedbackCourseId` to the `course_feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `course_feedbacks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updateBy` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CourseDetail" DROP CONSTRAINT "CourseDetail_courseExpectId_fkey";

-- DropForeignKey
ALTER TABLE "CourseDetail" DROP CONSTRAINT "CourseDetail_courseReqId_fkey";

-- DropForeignKey
ALTER TABLE "CourseDetail" DROP CONSTRAINT "CourseDetail_coursecSectionId_fkey";

-- DropForeignKey
ALTER TABLE "CourseDetail" DROP CONSTRAINT "CourseDetail_feedbackId_fkey";

-- DropForeignKey
ALTER TABLE "CourseDetail" DROP CONSTRAINT "CourseDetail_instructorId_fkey";

-- DropForeignKey
ALTER TABLE "CourseDetail" DROP CONSTRAINT "CourseDetail_schedulteId_fkey";

-- DropForeignKey
ALTER TABLE "CourseEnroll" DROP CONSTRAINT "CourseEnroll_enrolledCourseId_fkey";

-- DropForeignKey
ALTER TABLE "course_feedbacks" DROP CONSTRAINT "course_feedbacks_feedbackId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "course_level",
ADD COLUMN     "courseLevel" TEXT NOT NULL,
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "updatedBy" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CourseDetail" DROP COLUMN "course_level",
ADD COLUMN     "courseLevel" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "CourseEnroll" ADD COLUMN     "enrooledUserId" INTEGER NOT NULL,
ADD COLUMN     "scheduleId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CourseExpectation" DROP COLUMN "course_end_date",
DROP COLUMN "course_id",
DROP COLUMN "course_start_date",
ADD COLUMN     "courseEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "courseId" TEXT NOT NULL,
ADD COLUMN     "courseStartDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CourseRequirement" DROP COLUMN "course_end_date",
DROP COLUMN "course_id",
DROP COLUMN "course_start_date",
ADD COLUMN     "courseEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "courseId" TEXT NOT NULL,
ADD COLUMN     "courseStartDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "CourseSchedule" DROP COLUMN "course_end_date",
DROP COLUMN "course_id",
DROP COLUMN "course_start_date",
ADD COLUMN     "courseEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "courseStartDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "scheduleBy" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CoursecSection" DROP COLUMN "course_end_date",
DROP COLUMN "course_start_date",
ADD COLUMN     "courseEndDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "courseStartDate" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "birth_date",
DROP COLUMN "contact_address",
DROP COLUMN "contact_email",
DROP COLUMN "contact_mobile",
DROP COLUMN "contact_phone",
DROP COLUMN "first_name",
DROP COLUMN "last_name",
DROP COLUMN "national_id",
ADD COLUMN     "birthDate" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "contactAddress" TEXT NOT NULL,
ADD COLUMN     "contactEmail" TEXT NOT NULL,
ADD COLUMN     "contactMobile" TEXT NOT NULL,
ADD COLUMN     "contactPhone" TEXT NOT NULL,
ADD COLUMN     "firstName" TEXT NOT NULL,
ADD COLUMN     "lastName" TEXT NOT NULL,
ADD COLUMN     "nationalId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "course_feedbacks" DROP COLUMN "feedbackId",
DROP COLUMN "feedback_datetime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "feedbackBy" INTEGER NOT NULL,
ADD COLUMN     "feedbackCourseId" INTEGER NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "courseFeedbacks" INTEGER[],
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "updateBy" INTEGER NOT NULL;

-- DropTable
DROP TABLE "InstructorDetail";
