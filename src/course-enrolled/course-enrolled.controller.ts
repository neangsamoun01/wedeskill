import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseEnrolledService } from './course-enrolled.service';
import { CreateCourseEnrolledDto } from './dto/create-course-enrolled.dto';
import { UpdateCourseEnrolledDto } from './dto/update-course-enrolled.dto';

@Controller('course-enrolled')
export class CourseEnrolledController {
  constructor(private readonly courseEnrolledService: CourseEnrolledService) {}

  @Post()
  create(@Body() createCourseEnrolledDto: CreateCourseEnrolledDto) {
    return this.courseEnrolledService.create(createCourseEnrolledDto);
  }

  @Get()
  findAll() {
    return this.courseEnrolledService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.courseEnrolledService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseEnrolledDto: UpdateCourseEnrolledDto) {
    return this.courseEnrolledService.update(+id, updateCourseEnrolledDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseEnrolledService.remove(+id);
  }
}
