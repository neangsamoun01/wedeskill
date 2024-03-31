import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Course } from "src/course/entities/course.entity";
import { OneToMany } from "typeorm";


export class CreateInstructorDto {

    @IsString()
    @IsNotEmpty({ message: 'First Name is required...' })
    readonly firstName: string;
    
    @IsString()
    @IsNotEmpty({ message: 'Last name is required...' })
    readonly lastName: string;

    @IsString()
    @IsNotEmpty({ message: 'Title is required...' })
    readonly title: string;

    @IsString()
    @IsNotEmpty({ message: 'Title is required...' })
    readonly birthDate: Date;

    @IsString()
    @IsNotEmpty({ message: 'Phone is required...' })
    readonly contactPhone: string;

    @IsNotEmpty({ message: 'Email is required...' })
    @ApiProperty({ example: 'example@wedeskill.com' })
    @IsEmail()
    readonly contactEmail: string;

    @IsString()
    @IsNotEmpty({ message: 'Address is required...' })
    readonly contactAddress: string;

    @IsString()
    @IsNotEmpty({ message: 'National ID is required...' })
    readonly nationalID: string;

    // @IsString()
    // @IsNotEmpty()
    // @IsNotEmpty({ message: 'National ID is required...' })
    // readonly course: string[];

    // @IsNotEmpty({ message: 'about is required...' })
    // readonly about: string;
    
}