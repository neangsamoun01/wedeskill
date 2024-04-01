import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, HttpStatus, HttpException } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('instructor')
@Controller('api/v1/instructor')
export class InstructorController {
  constructor(private readonly instructorService: InstructorService) {}

  @Post('instructor-create')
  @ApiBearerAuth('defaultBearerAuth')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  async create(@Body() data: CreateInstructorDto):Promise<{ message: string }> {
    try {
      const result =await this.instructorService.create(data);
      if(result != null)
        return { message: 'Instructor register successfully' };
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }

  @Get('instructor-list')
  @ApiBearerAuth('defaultBearerAuth')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  findAll() {
    return this.instructorService.findAll();
  }

  @Get(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  findOne(@Param('id') id: string) {
    const courseId = parseInt(id, 10); // Convert id to a number
    return this.instructorService.findOne(courseId);
  }

  @Patch(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  update(@Param('id') id: string, @Body() updateInstructorDto: UpdateInstructorDto) {
    const courseId = parseInt(id, 10); // Convert id to a number
    return this.instructorService.update(courseId, updateInstructorDto);
  }

  @Delete(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @HttpCode(HttpStatus.OK)
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  remove(@Param('id') id: string) {
    const courseId = parseInt(id, 10); // Convert id to a number
    return this.instructorService.remove(courseId);
  }

}