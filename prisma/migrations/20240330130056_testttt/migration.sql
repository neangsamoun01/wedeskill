/*
  Warnings:

  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `CourseFeedback` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `requestedId` to the `request_friends` table without a default value. This is not possible if the table is not empty.
  - Added the required column `requesterId` to the `request_friends` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_feedbackId_fkey";

-- AlterTable
ALTER TABLE "request_friends" ADD COLUMN     "requestedId" TEXT NOT NULL,
ADD COLUMN     "requesterId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP CONSTRAINT "users_pkey",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER',
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "users_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "users_id_seq";

-- DropTable
DROP TABLE "CourseFeedback";

-- CreateTable
CREATE TABLE "course_feedbacks" (
    "id" TEXT NOT NULL,
    "detail" TEXT NOT NULL,
    "feedbackId" TEXT NOT NULL,
    "feedback_datetime" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "course_feedbacks_pkey" PRIMARY KEY ("id")
);

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
ALTER TABLE "Course" ADD CONSTRAINT "Course_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "course_feedbacks"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "course_feedbacks" ADD CONSTRAINT "course_feedbacks_feedbackId_fkey" FOREIGN KEY ("feedbackId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
