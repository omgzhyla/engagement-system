import { CreateVoteDto } from './create-vote.dto';

export class ResponseVoteDto extends CreateVoteDto {
  answers?: CreateVoteDto['options'];
}
