import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
// import { Prisma, Course } from '@prisma/client';
import { CreateScheduleDto } from 'src/schedule/dto/create-schedule.dto';
import { CreateCourseExpectDto } from 'src/course-expect/dto/create-course-expect.dto';
import { CreateCourseFeedbackDto } from 'src/course-feedback/dto/create-course-feedback.dto';
import { CreateCourseRequirementDto } from 'src/course-requirement/dto/create-course-requirement.dto';
import { CreateCourseSectionDto } from 'src/course-section/dto/create-course-section.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import {Course} from './entities/course.entity'
@Injectable()
export class CourseService {
  constructor(
    private prisma: PrismaService,
    ) {}

  async create(data: CreateCourseDto): Promise<Course> {
    return this.prisma.course.create({ data });
  }

  async findAll(){
    return this.prisma.course.findMany();
  }

  async findOne(id: number): Promise<Course | null> {
    const course = await this.prisma.course.findUnique({
      where: {
        id: id,
      },
    });

    if (!course) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return course;
  }

  async update(id: number, updateData: Partial<Course>): Promise<Course | null> {
    try {
      const updatedCourse = await this.prisma.course.update({
        where: {
          id: id,
        },
        data: updateData,
      });
      
      return updatedCourse;
    } catch (error) {
      // Handle errors if necessary
      throw new ForbiddenException({message:error});
      //console.error('Error updating course:', error);
      //return null;
    }
  }

  
  createSchedule(data: CreateScheduleDto) {
    return this.prisma.courseSchedule.create({data:{
      courseId: data.courseId,
      scheduleBy: data.scheduleBy,
      courseStartDate:data.courseStartDate,
      courseEndDate:data.courseEndDate,
      remark:data.remark
    }})
  }

  createExpectation(data: CreateCourseExpectDto) {
    return this.prisma.courseExpectation.create({data:{
      courseId: data.courseId,
      expectationDetail: data.expectationDetail,
      createdBy:data.createdBy
    }})
  }

  
  createRequired(data: CreateCourseRequirementDto) {
    return this.prisma.courseRequirement.create({data:{
      courseId: data.courseId,
      requirementDetail: data.requirementDetail,
      createdBy:data.createdBy
    }})
  }

  
  createFeedback(data: CreateCourseFeedbackDto) {
    return this.prisma.courseFeedback.create({data:{
      courseId: data.courseId,
      feedbackDetail: data.feedbackDetail,
      createdBy:data.createdBy
    }})
  }

  createSection(data: CreateCourseSectionDto) {
    return this.prisma.coursecSection.create({data:{
      courseId: data.courseId,
      sectionDetail: data.sectionDetail,
      createdBy:data.createdBy
    }})
  }
}