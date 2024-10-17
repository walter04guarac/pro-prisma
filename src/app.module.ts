import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaController } from './prisma/prisma.controller';

@Module({
  imports: [],
  controllers: [AppController, PrismaController],
  providers: [AppService],
})
export class AppModule {}
