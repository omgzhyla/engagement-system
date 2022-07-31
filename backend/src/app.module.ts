import { Module } from '@nestjs/common';
import { VotesModule } from './votes/votes.module';
import { ValidationPipe } from "./validation.pipe";
import { PrismaModule } from './prisma/prisma.module';
import { AnswersModule } from './answers/answers.module';

@Module({
  imports: [PrismaModule, VotesModule],
  providers: [ValidationPipe]
})
export class AppModule {}
