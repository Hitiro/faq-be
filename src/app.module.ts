import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { FaqModule } from './faq/faq.module';

@Module({
  imports: [ConfigModule.forRoot(), FaqModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
