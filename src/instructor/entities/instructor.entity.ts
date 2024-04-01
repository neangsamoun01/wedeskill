import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Course } from "src/course/entities/course.entity";
import { OneToMany, PrimaryGeneratedColumn } from "typeorm";

export class Instructor {

    @IsString({message: 'First Name should be a string...'})
    @IsNotEmpty({ message: 'First Name is required...' })
    readonly firstName: string;

    @IsString({message: 'Last Name should be a string...'})
    @IsNotEmpty({ message: 'Last name is required...' })
    readonly lastName: string;

    @IsString({message: 'First Name should be a string...'})
    @IsNotEmpty({ message: 'Title is required...' })
    readonly title: string;

    @IsString({message: 'First Name should be a string...'})
    @IsNotEmpty({ message: 'Phone is required...' })
    readonly birthDate: Date;

    @IsString({message: 'First Name should be a string...'})
    @IsNotEmpty({ message: 'Phone is required...' })
    readonly contactPhone: string;

    @IsNotEmpty({ message: 'Email is required...' })
    @IsEmail({}, { message: 'Invalid email format' })
    readonly contactEmail: string;

    @IsString()
    @IsNotEmpty({ message: 'Address is required...' })
    readonly contactAddress: string;

    @IsString({message: 'First Name should be a string...'})
    @IsNotEmpty({ message: 'National ID is required...' })
    readonly nationalID: string;

    // @IsString()
    // @IsNotEmpty()
    // @IsNotEmpty({ message: 'National ID is required...' })
    // readonly course: string[];

    
    // @IsNotEmpty({ message: 'about is required...' })
    // @IsEmail()
    // readonly about: string;
    // id: String;
    // first_name: string;
    // last_name: string; 
    // title: string; 
    // birth_date: Date; 
    // contact_phone: string; 
    // contact_mobile: string; 
    // contact_email: string; 
    // contact_address: string; 
    // national_id: string; 
    // createdAt: Date; 
    // updatedAt: Date;

}
