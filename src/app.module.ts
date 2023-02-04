import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { FaqModule } from './faq/faq.module';
import { Faq } from './faq/entities/faq.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    FaqModule,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: process.env.TYPEORM_BD,
      database: process.env.TYPEORM_DATABASE,
      host: process.env.TYPEORM_HOST,
      port: process.env.TYPEORM_PORT,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      synchronize: true,
      entities: [Faq],
    } as TypeOrmModuleOptions),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
