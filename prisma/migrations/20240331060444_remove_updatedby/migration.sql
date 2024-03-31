/*
  Warnings:

  - You are about to drop the column `createdBy` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updateBy` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdBy",
DROP COLUMN "updateBy";
