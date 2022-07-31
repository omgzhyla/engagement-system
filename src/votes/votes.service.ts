import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VotesNotFoundException } from "./votes.not-found.exception";
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVoteDto: CreateVoteDto) {
    return this.prisma.votes.create({ data: createVoteDto });
  }

  findAll() {
    return this.prisma.votes.findMany();
  }

  findOne(id: number) {
    return this.prisma.votes.findUniqueOrThrow({ where: { id } })
      .catch(() => {throw new VotesNotFoundException()});
  }

  update(id: number, updateVoteDto: UpdateVoteDto) {
    throw new VotesNotFoundException();
  }

  remove(id: number) {
    return this.prisma.votes.delete({ where: { id } })
      .catch(() => {throw new VotesNotFoundException()});
  }
}
