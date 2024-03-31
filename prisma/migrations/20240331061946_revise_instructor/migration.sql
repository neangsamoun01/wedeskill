/*
  Warnings:

  - You are about to drop the column `contactMobile` on the `Instructor` table. All the data in the column will be lost.
  - You are about to drop the column `nationalId` on the `Instructor` table. All the data in the column will be lost.
  - Added the required column `nationalID` to the `Instructor` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Instructor" DROP COLUMN "contactMobile",
DROP COLUMN "nationalId",
ADD COLUMN     "nationalID" TEXT NOT NULL;
