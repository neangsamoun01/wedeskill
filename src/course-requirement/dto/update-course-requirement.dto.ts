import { PartialType } from '@nestjs/swagger';
import { CreateCourseRequirementDto } from './create-course-requirement.dto';

export class UpdateCourseRequirementDto extends PartialType(CreateCourseRequirementDto) {}
