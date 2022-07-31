import { Injectable } from '@nestjs/common';
import { AddAnswerDto } from './dto/add-answer.dto';
import { PrismaService } from "../prisma/prisma.service";
import { Prisma } from "../generated/prisma-client";

type answersForVote = {
  option: number;
  count: number;
}

@Injectable()
export class AnswersService {
  constructor(private readonly prisma: PrismaService) {}

  add(addAnswerDto: AddAnswerDto) {
    return this.prisma.answers.create({ data: addAnswerDto });
  }

  getForVote(voteId: number) {
    return this.prisma.$queryRaw<answersForVote>(Prisma.sql`
      select answer as option, count(answer)::integer as "count"
      from answers
      where vote_id = ${voteId}
      group by vote_id, answer
    `);
  }
}
