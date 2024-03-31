import { ApiProperty } from "@nestjs/swagger";
import { CourseEnrolled } from "src/course-enrolled/entities/course-enrolled.entity";
import { CourseExpect } from "src/course-expect/entities/course-expect.entity";
import { CourseFeedback } from "src/course-feedback/entities/course-feedback.entity";
import { CourseRequirement } from "src/course-requirement/entities/course-requirement.entity";
import { CourseSection } from "src/course-section/entities/course-section.entity";
import { Instructor } from "src/instructor/entities/instructor.entity";
import { Schedule } from "src/schedule/entities/schedule.entity";
import { ManyToOne, PrimaryGeneratedColumn } from "typeorm";

//@Entity()
export class Course {
  title:string
  description: string
  // tag: string[]
  courseLevel: string
  assistant: string
  imagePath: string
  duration:    number
  certify: boolean
  published: boolean
  favorited: boolean
  instructorId: number
  feedbackId: number
  schedulteId:number
  courseExpectId:number
  courseRequireId:number
  coursecSectionId:number
}