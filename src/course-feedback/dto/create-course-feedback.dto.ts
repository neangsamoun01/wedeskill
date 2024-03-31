import { User } from "src/auth/entities/auth.entity"
import { Course } from "src/course/entities/course.entity"


export class CreateCourseFeedbackDto {
    courseId:number
    feedbackDetail:string
    createdBy:number
}
