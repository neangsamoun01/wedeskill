import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CourseService } from './course.service';
import { CourseController } from './course.controller';

@Module({
  providers: [PrismaService, CourseService],
  controllers: [CourseController],
})
export class CourseModule {}
