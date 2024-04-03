import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ProfileCreateDto {
  @IsNotEmpty({ message: 'Biography is required.' })
  @ApiProperty({ example: 'Build awesome' })
  readonly biography: string;

  @IsNotEmpty({ message: 'Profile image is required.' })
  @ApiProperty({ example: 'Profile Image' })
  readonly profileImage: string;
  
  readonly id: number;
}