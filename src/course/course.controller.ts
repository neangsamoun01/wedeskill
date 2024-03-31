import { Controller, Post, Get,Body, HttpCode, HttpStatus,HttpException, Param, NotFoundException, Put } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course, Prisma } from '@prisma/client';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { GetCourse } from 'src/auth/decorators/course.decorator';
import { CreateCourseDto } from './dto/create-course.dto';
import { CreateScheduleDto } from 'src/schedule/dto/create-schedule.dto';
import { CreateCourseExpectDto } from 'src/course-expect/dto/create-course-expect.dto';
import { CreateCourseFeedbackDto } from 'src/course-feedback/dto/create-course-feedback.dto';
import { CreateCourseSectionDto } from 'src/course-section/dto/create-course-section.dto';
import { CreateCourseRequirementDto } from 'src/course-requirement/dto/create-course-requirement.dto';

@ApiTags('auth')
@Controller('api/v1/courses')
export class CourseController {
  constructor(
    private readonly courseService: CourseService
    ) {}

  @Post('course-create')
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  @HttpCode(HttpStatus.OK)
  async createCourse(@Body() courseData: CreateCourseDto):Promise<{ message: string; course: Course }> {
    try {
      const result = await this.courseService.create(courseData);
      if(result != null)
        return { message: 'Course created successfully',course:result };
    } catch (error) { 
      throw new HttpException({
        //message: 'created success...',
        status: HttpStatus.FORBIDDEN,
        error: error//'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  @Get('course-list')
  @ApiBearerAuth('defaultBearerAuth')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  async findAll(){
    try {
      const courses: Course[] = await this.courseService.findAll(); // Replace with actual logic to fetch courses
      return courses;
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  @Get(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Get user logged in profile' })
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string): Promise<Course> {
    const courseId = parseInt(id, 10); // Convert id to a number
    const course = await this.courseService.findOne(courseId);
  
    if (!course) {
      throw new NotFoundException(`Course with ID ${courseId} not found`);
    }

    return course;
  }

  @Put(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Get user logged in profile' })
  @HttpCode(HttpStatus.OK)
  async updateCourse(@Param('id') id: number, @Body() updateData: Course): Promise<Course> {
   // const courseId = parseInt(id, 10); // Convert id to a number
    const updatedCourse = await this.courseService.update(id, updateData);
    console.log(updatedCourse)
    if (!updatedCourse) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }

    return updatedCourse;
  }

  @Post('create-course-schedule')
  create(@Body() createScheduleDto: CreateScheduleDto) {
    return this.courseService.createSchedule(createScheduleDto);
  }

  // @Post('create-expect')
  // createExpect(@Body() createScheduleDto: CreateScheduleDto) {
  //   return this.courseService.createSchedule(createScheduleDto);
  // }

  // @Post('create-feedback')
  // createFeedback(@Body() createScheduleDto: CreateScheduleDto) {
  //   return this.courseService.createSchedule(createScheduleDto);
  // }

  @Post('create-course-required')
  createCourseRequire(@Body() data: CreateCourseRequirementDto) {
    return this.courseService.createRequired(data);
  }

  @Post('create-course-expected')
  createCourseExpected(@Body() createCourseExpected: CreateCourseExpectDto) {
    return this.courseService.createExpectation(createCourseExpected);
  }

  @Post('create-course-feedback')
  createCourseFeedback(@Body() createCourseFeedback: CreateCourseFeedbackDto) {
    return this.courseService.createFeedback(createCourseFeedback);
  }

  @Post('create-course-section')
  createCourseSection(@Body() createCourseSection: CreateCourseSectionDto) {
    return this.courseService.createSection(createCourseSection);
  }
}
