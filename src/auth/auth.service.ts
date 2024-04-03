import {
  Injectable,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/userDto';
import { ProfileCreateDto } from './dto/profileDto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  async createUser(data: CreateUserDto) {
    const result = await this.prisma.user.findUnique({
      where: {
        email: data.email,
      },
    });
    if (result == null) {
      const salt = bcrypt.genSaltSync(15);
      const hash = bcrypt.hashSync(data.password, salt);
      const resultcreate = await this.prisma.user.create({
        data: {
          email: data.email,
          password: hash,
          firstName: data.firstName,
          lastName: data.lastName,
          jobTitle: data.jobTitle,
          dateOfBirth: data.dateOfBirth,
        },
      });
      return {
        message: 'Registered success...',
        statusCode: 201,
      };
    }
    return {
      message: 'Email already taken',
      statusCode: 400,
    };
  }

  async signIn(email: string, pass: string) {
    console.log(email);
    const result = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    // const user = await this.usersService.findOne(username);
    if (result == null) {
      return {
        message: 'Email does not exist',
        statusCode: 404,
      };
    }

    const isMatch = await bcrypt.compare(pass, result.password);
    console.log(isMatch);
    if (isMatch) {
      const payload = { id: result.id };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } else {
      return {
        message: 'Please check your email and password again.',
        statusCode: 404,
      };
    }
  }

  async getprofile(id: number) {
    console.log(id)
    const result = await this.prisma.profile.findUnique({
      where: {
        id: id,
      },
      select: {
        biograpy: true,
        profileImage: true,
        id: true,
      },
    });
    console.log(result);
    return result;
  }
  
  async updateProfileInfo(createProfileImage: ProfileCreateDto, id: number) {
    // const result = await this.prisma.profile.create({
    //   data: {
    //     biograpy: createProfileImage.biography,
    //     profileImage: createProfileImage.profileImage,
    //   //  id: id,
    //   },
    // });
    // if (result) {
    if (true) {
      return {
        message: 'Profile updated successfully',
        statusCode: 201,
      };
    }
    return ''
  }
}
