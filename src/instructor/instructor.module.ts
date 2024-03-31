import { Module } from '@nestjs/common';
import { InstructorService } from './instructor.service';
import { InstructorController } from './instructor.controller';
import { PrismaService } from 'src/prisma/prisma.service';

// @Module({
//   controllers: [InstructorController],
//   providers: [InstructorService],
// })

@Module({
  providers: [PrismaService, InstructorService],
  controllers: [InstructorController],
})
export class InstructorModule {}
