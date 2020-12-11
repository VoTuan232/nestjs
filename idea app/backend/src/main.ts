import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { IdeaModule } from './idea/idea.module';
import { UserModule } from './user/user.module';
import { CommentModule } from './comment/comment.module';
import { ConfigSwagger } from './config/swagger';

const port = process.env.PORT || 8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  ConfigSwagger(app);

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
