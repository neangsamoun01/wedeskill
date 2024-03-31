import { Test, TestingModule } from '@nestjs/testing';
import { CourseEnrolledService } from './course-enrolled.service';

describe('CourseEnrolledService', () => {
  let service: CourseEnrolledService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CourseEnrolledService],
    }).compile();

    service = module.get<CourseEnrolledService>(CourseEnrolledService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
