import { PartialType } from '@nestjs/mapped-types';
import { CreateVoteDto } from './create-vote.dto';
import { votes } from "../../generated/prisma-client";

export class UpdateVoteDto extends PartialType(CreateVoteDto) {
  status?: votes['status'];
}
