import { Module } from '@nestjs/common';
import { CourseEnrolledService } from './course-enrolled.service';
import { CourseEnrolledController } from './course-enrolled.controller';

@Module({
  controllers: [CourseEnrolledController],
  providers: [CourseEnrolledService],
})
export class CourseEnrolledModule {}
