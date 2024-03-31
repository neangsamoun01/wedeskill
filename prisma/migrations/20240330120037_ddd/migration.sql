/*
  Warnings:

  - You are about to drop the column `requestedId` on the `request_friends` table. All the data in the column will be lost.
  - You are about to drop the column `requesterId` on the `request_friends` table. All the data in the column will be lost.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `role` on the `users` table. All the data in the column will be lost.
  - The `id` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "CourseFeedback" DROP CONSTRAINT "CourseFeedback_feedbackId_fkey";

-- DropForeignKey
ALTER TABLE "followings" DROP CONSTRAINT "followings_userId_fkey";

-- DropForeignKey
ALTER TABLE "posts" DROP CONSTRAINT "posts_authorId_fkey";

-- DropForeignKey
ALTER TABLE "profile" DROP CONSTRAINT "profile_userId_fkey";

-- DropForeignKey
ALTER TABLE "request_friends" DROP CONSTRAINT "request_friends_requestedId_fkey";

-- DropForeignKey
ALTER TABLE "request_friends" DROP CONSTRAINT "request_friends_requesterId_fkey";

-- AlterTable
ALTER TABLE "request_friends" DROP COLUMN "requestedId",
DROP COLUMN "requesterId";

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
DROP COLUMN "role",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
