
import { CreateInstructorDto } from './dto/create-instructor.dto';
import { UpdateInstructorDto } from './dto/update-instructor.dto';
import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {Instructor } from './entities/instructor.entity';


@Injectable()
export class InstructorService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateInstructorDto): Promise<Instructor>{
    return this.prisma.instructor.create({data});
  }

  findAll() {
    return this.prisma.instructor.findMany();
  }

  async findOne(id: number): Promise<Instructor | null> {
    const instructor = await this.prisma.instructor.findUnique({
      where: {
          id: id,
      },
  });
    if (!instructor) {
      throw new NotFoundException(`Course with ID ${id} not found`);
    }
    return instructor;
  }

  async update(id: number, updateData: Partial<Instructor>): Promise<Instructor | null> {
    try {
      const updatedInstructor = await this.prisma.instructor.update({
        where: {
          id: id,
        },
        data: updateData,
      });
      
      return updatedInstructor;
    } catch (error) {
      // Handle errors if necessary
      throw new ForbiddenException({message:error});
      //console.error('Error updating course:', error);
      //return null;
    }
  }

  async remove(id: number): Promise<void> {
    await this.prisma.instructor.delete({
      where: {
        id,
      },
    });
  }
}