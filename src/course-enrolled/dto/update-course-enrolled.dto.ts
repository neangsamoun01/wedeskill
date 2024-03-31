import { PartialType } from '@nestjs/swagger';
import { CreateCourseEnrolledDto } from './create-course-enrolled.dto';

export class UpdateCourseEnrolledDto extends PartialType(CreateCourseEnrolledDto) {}
