import { Course } from "src/course/entities/course.entity"

export class Schedule {
    courseId:number
    scheduleBy:number
    courseStartDate:Date
    courseEndDate:Date
    remark:string
}