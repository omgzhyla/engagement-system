import { Module } from '@nestjs/common';
import { VotesService } from './votes.service';
import { VotesController } from './votes.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AnswersModule } from "../answers/answers.module";
import { AnswersService } from "../answers/answers.service";

@Module({
  controllers: [VotesController],
  providers: [VotesService, AnswersService],
  imports: [PrismaModule, AnswersModule],
})
export class VotesModule {}
