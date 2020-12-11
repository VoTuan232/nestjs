import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { CommentModule } from 'src/comment/comment.module';
import { IdeaModule } from 'src/idea/idea.module';
import { UserModule } from 'src/user/user.module';

export function ConfigSwagger(app) {
  /**
   * Swagger Idea
   */
  const ideaOptions = new DocumentBuilder()
    .setTitle('Idea Document')
    .setDescription('The ideas app API description')
    .setVersion('1.0')
    .addTag('ideas')
    .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT'
    })
    .build();
  const ideaDocument = SwaggerModule.createDocument(app, ideaOptions, {
    include: [IdeaModule],
  });
  SwaggerModule.setup('api/ideas', app, ideaDocument);

  /**
   * Swagger User
   */
  const userOptions = new DocumentBuilder()
    .setTitle('User Document')
    .setDescription('The User API description')
    .setVersion('1.0')
    .addTag('users')
    .build();
  const userDocument = SwaggerModule.createDocument(app, userOptions, {
    include: [UserModule],
  });
  SwaggerModule.setup('api/users', app, userDocument);

  /**
   * Swagger Comment
   */
  const commentOptions = new DocumentBuilder()
    .setTitle('Comment Document')
    .setDescription('The comment API description')
    .setVersion('1.0')
    .addTag('comments')
    .build();
  const commentDocument = SwaggerModule.createDocument(app, commentOptions, {
    include: [CommentModule],
  });
  SwaggerModule.setup('api/comments', app, commentDocument);
}
