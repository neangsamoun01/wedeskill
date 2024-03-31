import { PartialType } from '@nestjs/swagger';
import { CreateCourseFeedbackDto } from './create-course-feedback.dto';

export class UpdateCourseFeedbackDto extends PartialType(CreateCourseFeedbackDto) {}
