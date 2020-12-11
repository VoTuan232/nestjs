import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Swagger
   */
  const options = new DocumentBuilder()
  .setTitle('Idea Document')
  .setDescription('The ideas app API description')
  .setVersion('1.0')
  .addTag('ideas')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  app.enableCors({
    origin: [
      'http://localhost:4201', // angular
      // 'http://localhost:3000', // react
      // 'http://localhost:8081', // react-native
    ],
  });
  await app.listen(port);
  Logger.log(`Server running on http://localhost:${port}`);
  
}
bootstrap();
