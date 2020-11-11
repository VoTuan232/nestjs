import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CatController } from './cats/cat.controller';
import { CatService } from './cats/cat.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cat.module';
import { TestModule } from './tests/test.module';
import { LoggerMiddleware } from './middlewares/logger.middleware';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './exception-filters/http-exception.filter';
import { RolesGuard } from './guards/roles.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { ConfigModule } from './config/config.module';

@Module({
  // imports: [CatsModule, TestModule, ConfigModule.register({ folder: './config' })],
  controllers: [AppController],
  providers: [AppService,
    // {
    //   provide: APP_FILTER,
    //   useClass: HttpExceptionFilter,
    // },
    // {
    //   provide: APP_GUARD,
    //   useClass: RolesGuard,
    // },
    // {
    //   provide: APP_INTERCEPTOR,
    //   useClass: LoggingInterceptor,
    // },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .exclude(
        { path: 'cats', method: RequestMethod.GET },
        // { path: 'cats', method: RequestMethod.POST },
        'cats/(.*)',
      )
      // .forRoutes('cats');
      // .forRoutes('*');
      .forRoutes({ path: 'cats', method: RequestMethod.POST });
      // .forRoutes(CatsController)
      // forRoutes({ path: 'ab*cd', method: RequestMethod.ALL }); // wildcard
  }
}