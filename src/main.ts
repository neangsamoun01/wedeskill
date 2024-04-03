import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { SwaggerDocumentOptions } from './SwaggerDocumentOptions';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('WEDESKILL API')
    .setDescription('WEDESKILL API')
    .setVersion('1.0')
     .addBearerAuth(
      {
        description: 'Default JWT Authorization',
        type: 'http',
        in: 'header',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'defaultBearerAuth',
    )
    .addTag('content', 'wedeskill.com/content')
    .addTag('course', 'wedeskill.com/course')
    .build();
  const options: SwaggerDocumentOptions = {
    operationIdFactory: (
      controllerKey: string,
      methodKey: string
    ) => methodKey
  };
 app.useGlobalPipes(new ValidationPipe());
 const document = SwaggerModule.createDocument(app, config, options);

SwaggerModule.setup('api/swagger', app, document);
  await app.listen(3030);
}
bootstrap();