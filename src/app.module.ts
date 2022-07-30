import { Module } from '@nestjs/common';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [VotesModule],
})
export class AppModule {}
