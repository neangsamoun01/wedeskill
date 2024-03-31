import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetCourse = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    const course = request.course;

    return data ? course?.[data] : course;
  },
);