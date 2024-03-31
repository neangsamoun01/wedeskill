import { IsEmail, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty({ message: 'first name is required...' })
  @ApiProperty({ example: 'Dy' })
  firstName: string;

  @IsNotEmpty({ message: 'last name is required...' })
  @ApiProperty({ example: 'Jiva' })
  lastName: string;

  @IsNotEmpty({ message: 'date of birth is required...' })
  @ApiProperty({ example: '1970-01-01T00:00:00.000Z' })
  dateOfBirth: Date;

  @ApiProperty({ example: 'Software Engineer' })
  jobTitle: string;

  @IsNotEmpty({ message: 'email is required...' })
  @ApiProperty({ example: 'example@wedeskill.com' })
  @IsEmail()
  email: string;

  @IsNotEmpty({ message: 'password is required...' })
  @ApiProperty({ example: 'strongpassword' })
  password: string;
}