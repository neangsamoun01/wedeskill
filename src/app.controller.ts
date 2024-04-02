import {
  Controller,
  Get,
  Body,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { Public } from './auth/decorators/public.decorator';
import { ApiOperation,ApiResponse,ApiTags} from '@nestjs/swagger';
import { AuthService } from './auth/auth.service';
import { User } from './auth/entities/auth.entity';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService
    ) {}

  @ApiOperation({ summary: 'Welcome...', description: 'Returns welcoming content' })
  @ApiResponse({ status: 200, description: 'Returns an array of welcoming content'})
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Get()
  async welcome(signInDto: User):Promise<string> {
    return 'Hello world'//return this.authService.signIn(signInDto.email, signInDto.password);
  }
}