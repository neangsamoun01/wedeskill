
import { IsString, IsNotEmpty, IsNumber, IsBoolean } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title:string

  @IsNotEmpty()
  @IsString()
  description: string

  @IsNotEmpty()
  @IsString()
  courseLevel: string

  @IsNotEmpty()
  assistant: string

  @IsNotEmpty()
  @IsString()
  imagePath: string

  @IsNotEmpty()
  @IsNumber()
  duration:    number

  @IsNotEmpty()
  @IsBoolean()
  certify: boolean;

  @IsNotEmpty()
  @IsBoolean()
  published: boolean;

  @IsNotEmpty()
  @IsBoolean()
  favorited: boolean

  @IsNotEmpty()
  @IsNumber()
  instructorId: number

  @IsNotEmpty()
  @IsNumber()
  feedbackId: number

  @IsNotEmpty()
  @IsNumber()
  schedulteId:number

  @IsNotEmpty()
  @IsNumber()
  courseExpectId:number

  @IsNotEmpty()
  @IsNumber()
  courseRequireId:number

  @IsNotEmpty()
  @IsNumber()
  coursecSectionId:number
  
  @IsNotEmpty()
  @IsNumber()
  createdBy:number

  // @IsString()
  // @IsNotEmpty()
  // @IsNotEmpty({ message: 'id is required...' })
  // readonly id: string;
  
  // @IsString()
  // @IsNotEmpty()
  // @IsNotEmpty({ message: 'title is required...' })
  // course_level: string
  // @IsString()
  // @IsNotEmpty()
  // @IsNotEmpty({ message: 'title is required...' })
  // readonly title: string;

  // @IsString()
  // @IsNotEmpty({ message: 'description is required...' })
  // readonly description: string;

  // @IsArray()
  // @ArrayNotEmpty()
  // @ArrayUnique()
  // readonly tags: string[];

  // // @IsString()
  // // @IsNotEmpty({ message: 'instructor is required...' })
  // // readonly instructor: string; @IsString()
  // // @IsNotEmpty({ message: 'instructor is required...' })
  // // readonly instructor: string;

  // @IsOptional()
  // @IsNumber()
  // @Min(0)
  // @IsNotEmpty({ message: 'duration is required...' })
  // readonly duration: number; // Duration in minutes

  
  // @ManyToOne(() => Instructor, instructor => instructor.courses)
  // instructor: Instructor[];

  // @ManyToOne(() => CourseFeedback, feedback => feedback)
  // feedback: CourseFeedback[];

  // @ManyToOne(() => Schedule, schedule => schedule)
  // schedule: Schedule[];

  // @ManyToOne(() => CourseExpect, courseExpect => courseExpect)
  // courseExpect: CourseExpect[];

  // @ManyToOne(() => CourseRequirement, courseRequirement => courseRequirement)
  // courseRequirement: CourseRequirement[];

  // @ManyToOne(() => CourseSection, courseSection => courseSection)
  // coursecSection: CourseSection[];

  // @ManyToOne(() => CourseEnrolled, courseEnrolled => courseEnrolled)
  // courseEnrolled?: CourseEnrolled[];
  // Add more fields as needed
}

