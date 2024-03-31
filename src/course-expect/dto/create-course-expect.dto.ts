import { Course } from "src/course/entities/course.entity"

export class CreateCourseExpectDto {
    courseId:number
    expectationDetail:string
    createdBy:number
}
