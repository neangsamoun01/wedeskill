import { Course } from "src/course/entities/course.entity"

export class CreateCourseSectionDto {
    courseId:number
    sectionDetail:string
    createdBy:number
}
