import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forRoot({
        type: 'postgres',
        port: 5432,
        username: 'root',
        password: 'password',
        database: 'ideas-app',
        synchronize: true,
        logging: true,
        host: 'pgdb',
        // entities: [IdeaEntity],
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
    })]
})
export class PostgresModule {
}
