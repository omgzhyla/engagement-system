import { Injectable } from '@nestjs/common';
import { AddAnswerDto } from './dto/add-answer.dto';
import { PrismaService } from "../prisma/prisma.service";
import { VotesNotFoundException } from "../votes/votes.not-found.exception";

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) {}

  create(addAnswerDto: AddAnswerDto) {
    return this.prisma.answers.create({ data: addAnswerDto });
  }

  findAll(voteId: number) {
    return this.prisma.answers.findMany({ where: { vote_id: voteId } });
  }
}
