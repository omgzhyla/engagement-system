import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VotesNotFoundException } from "./votes.not-found.exception";


@Injectable()
export class VotesService {
  create(createVoteDto: CreateVoteDto) {
  }

  findAll() {
    return [];
  }

  findOne(id: number) {
    throw new VotesNotFoundException();
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    throw new VotesNotFoundException();
  }

  remove(id: number) {
    throw new VotesNotFoundException();
  }
}
