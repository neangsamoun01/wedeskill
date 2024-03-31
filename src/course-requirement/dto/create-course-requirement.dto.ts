import { Course } from "src/course/entities/course.entity"

export class CreateCourseRequirementDto {
    courseId:number
    requirementDetail:string
    createdBy:number
}
