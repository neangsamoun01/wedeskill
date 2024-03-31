import { ApiProperty } from '@nestjs/swagger';
import { isEmail } from 'class-validator';
export class User {
  // @ApiProperty({ example: 'example@example.com' })
  email: string;

  // @ApiProperty({ example: 'strongpassword' })
  password: string;
}
