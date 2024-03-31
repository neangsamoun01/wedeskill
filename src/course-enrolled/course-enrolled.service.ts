import { Injectable } from '@nestjs/common';
import { CreateCourseEnrolledDto } from './dto/create-course-enrolled.dto';
import { UpdateCourseEnrolledDto } from './dto/update-course-enrolled.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CourseEnrolledService {
  constructor(private prisma: PrismaService) {}
  create(createCourseEnrolledDto: CreateCourseEnrolledDto) {
    return ''//this.prisma.course.create({ createCourseEnrolledDto });
  }

  findAll() {
    return `This action returns all courseEnrolled`;
  }

  findOne(id: number) {
    return `This action returns a #${id} courseEnrolled`;
  }

  update(id: number, updateCourseEnrolledDto: UpdateCourseEnrolledDto) {
    return `This action updates a #${id} courseEnrolled`;
  }

  remove(id: number) {
    return `This action removes a #${id} courseEnrolled`;
  }
}
