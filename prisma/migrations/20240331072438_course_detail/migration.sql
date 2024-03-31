/*
  Warnings:

  - You are about to drop the column `courseEndDate` on the `CourseExpectation` table. All the data in the column will be lost.
  - You are about to drop the column `courseStartDate` on the `CourseExpectation` table. All the data in the column will be lost.
  - You are about to drop the column `orderNumber` on the `CourseExpectation` table. All the data in the column will be lost.
  - You are about to drop the column `remark` on the `CourseExpectation` table. All the data in the column will be lost.
  - You are about to drop the column `courseEndDate` on the `CourseRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `courseStartDate` on the `CourseRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `orderNumber` on the `CourseRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `remark` on the `CourseRequirement` table. All the data in the column will be lost.
  - You are about to drop the column `courseEndDate` on the `CoursecSection` table. All the data in the column will be lost.
  - You are about to drop the column `courseStartDate` on the `CoursecSection` table. All the data in the column will be lost.
  - You are about to drop the column `orderNumber` on the `CoursecSection` table. All the data in the column will be lost.
  - You are about to drop the column `remark` on the `CoursecSection` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `CourseExpectation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expectationDetail` to the `CourseExpectation` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `courseId` on the `CourseExpectation` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `createdBy` to the `CourseRequirement` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requirementDetail` to the `CourseRequirement` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `courseId` on the `CourseRequirement` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `courseId` to the `CoursecSection` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `CoursecSection` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CourseExpectation" DROP COLUMN "courseEndDate",
DROP COLUMN "courseStartDate",
DROP COLUMN "orderNumber",
DROP COLUMN "remark",
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "expectationDetail" TEXT NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CourseRequirement" DROP COLUMN "courseEndDate",
DROP COLUMN "courseStartDate",
DROP COLUMN "orderNumber",
DROP COLUMN "remark",
ADD COLUMN     "createdBy" INTEGER NOT NULL,
ADD COLUMN     "requirementDetail" TEXT NOT NULL,
DROP COLUMN "courseId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "CoursecSection" DROP COLUMN "courseEndDate",
DROP COLUMN "courseStartDate",
DROP COLUMN "orderNumber",
DROP COLUMN "remark",
ADD COLUMN     "courseId" INTEGER NOT NULL,
ADD COLUMN     "createdBy" INTEGER NOT NULL;
