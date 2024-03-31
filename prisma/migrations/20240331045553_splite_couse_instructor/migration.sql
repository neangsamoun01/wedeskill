-- DropForeignKey
ALTER TABLE "CourseDetail" DROP CONSTRAINT "CourseDetail_instructorId_fkey";

-- CreateTable
CREATE TABLE "InstructorDetail" (
    "id" SERIAL NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "birth_date" TIMESTAMP(3) NOT NULL,
    "contact_phone" TEXT NOT NULL,
    "contact_mobile" TEXT NOT NULL,
    "contact_email" TEXT NOT NULL,
    "contact_address" TEXT NOT NULL,
    "national_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InstructorDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CourseDetail" ADD CONSTRAINT "CourseDetail_instructorId_fkey" FOREIGN KEY ("instructorId") REFERENCES "InstructorDetail"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
