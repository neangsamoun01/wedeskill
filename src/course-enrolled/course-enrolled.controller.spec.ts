import { Test, TestingModule } from '@nestjs/testing';
import { CourseEnrolledController } from './course-enrolled.controller';
import { CourseEnrolledService } from './course-enrolled.service';

describe('CourseEnrolledController', () => {
  let controller: CourseEnrolledController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CourseEnrolledController],
      providers: [CourseEnrolledService],
    }).compile();

    controller = module.get<CourseEnrolledController>(CourseEnrolledController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
