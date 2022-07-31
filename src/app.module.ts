import { Module } from '@nestjs/common';
import { VotesModule } from './votes/votes.module';
import { ValidationPipe } from "./validation.pipe";

@Module({
  imports: [VotesModule],
  providers: [ValidationPipe]
})
export class AppModule {}
