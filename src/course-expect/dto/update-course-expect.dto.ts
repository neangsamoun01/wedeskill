import { PartialType } from '@nestjs/swagger';
import { CreateCourseExpectDto } from './create-course-expect.dto';

export class UpdateCourseExpectDto extends PartialType(CreateCourseExpectDto) {}
