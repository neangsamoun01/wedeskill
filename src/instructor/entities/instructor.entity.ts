import { IsEmail, IsNotEmpty, IsString } from "class-validator";

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

}
