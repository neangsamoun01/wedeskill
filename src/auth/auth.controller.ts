import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Request,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from './entities/auth.entity';
import { AuthService } from './auth.service';
import { Public } from './decorators/public.decorator';
import { CreateUserDto } from './dto/userDto';
import { ProfileCreateDto } from './dto/profileDto';
import { GetUser } from './decorators/user.decorator';

@ApiTags('auth')
@Controller('api/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Login user in' })
  @Public()
  @HttpCode(HttpStatus.CREATED)
  @Post('login')
  async signIn(@Body() signInDto: User) {
    return this.authService.signIn(signInDto.email, signInDto.password);
  }

  @Public()
  @Post('signup')
  @ApiOperation({ summary: 'Signup with email and password' })
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() user: CreateUserDto) {
      console.log(user)
     return this.authService.createUser(user);
  }

  @Get(':id')
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Get user logged in profile' })
  @HttpCode(HttpStatus.OK)
  async getProfile(@GetUser('id') id: string) {
    console.log(id)
    const userId = parseInt(id, 10);
    return this.authService.getprofile(userId);
  }

  @Post('profile')
  @ApiBearerAuth('defaultBearerAuth')
  @ApiOperation({ summary: 'Update user logged in profile' })
  @HttpCode(HttpStatus.OK)
  async updateProfile(
    @Body() createProfileImage: ProfileCreateDto,
    @Req() req,
  ) {
    return this.authService.updateProfileInfo(createProfileImage, req.user.id);
  }
}
