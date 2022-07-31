import { Injectable } from '@nestjs/common';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { VotesNotFoundException } from "./votes.not-found.exception";
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, status } from "../generated/prisma-client";
import InputJsonValue = Prisma.InputJsonValue;

@Injectable()
export class VotesService {
  constructor(private readonly prisma: PrismaService) {}

  create(createVoteDto: CreateVoteDto) {
    return this.prisma.votes.create({
      data: {
        title: createVoteDto.title,
        description: createVoteDto.description,
        options: createVoteDto.options as InputJsonValue,
      }
    });
  }

  findAll() {
    return this.prisma.votes.findMany();
  }

  /**
   * @throws VotesNotFoundException
   */
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

  open(id: number) {
    return this.prisma.votes.update({
      data: {
        status: status.open,
        opened_at: new Date(Date.now()),
      },
      where: {
        id: id,
      }
    });
  }

  close(id: number) {
    return this.prisma.votes.update({
      data: {
        status: status.closed,
        closed_at: new Date(Date.now()),
      },
      where: {
        id: id,
      }
    });
  }

}
