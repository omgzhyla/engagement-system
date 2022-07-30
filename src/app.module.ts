import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VotesModule } from './votes/votes.module';

@Module({
  imports: [VotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
