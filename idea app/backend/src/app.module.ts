import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IdeaEntity } from './idea/idea.entity';
import { PostgresModule } from './postgres/postgres.module';
import { IdeaModule } from './idea/idea.module';

@Module({
  // imports: [PostgresModule, IdeaModule],
  imports: [TypeOrmModule.forRoot(), IdeaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
