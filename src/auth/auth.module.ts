import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
//import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [
  //  UsersModule
  ],
  providers: [
    PrismaService,
    AuthService,
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule { }
