import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, ParseIntPipe, UsePipes, HttpStatus, HttpException,
} from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { ValidationPipe } from "../validation.pipe";
import { AnswersService } from "../answers/answers.service";
import { AddAnswerDto } from "../answers/dto/add-answer.dto";
import { votes, status } from "../generated/prisma-client";
import { ResponseVoteDto } from "./dto/response-vote.dto";

@Controller('votes')
export class VotesController {
  constructor(
    private readonly votesService: VotesService,
    private readonly answersService: AnswersService
  ) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Post(':id/answers')
  async addAnswer(@Param('id', ParseIntPipe) id: number, @Body() addAnswerDto: AddAnswerDto) {
    addAnswerDto.vote_id = id;
    const vote = this.votesService.findOne(id);
    return this.answersService.add(addAnswerDto)
      .catch((reason => {
        throw new HttpException('Answer already recorded.', HttpStatus.CONFLICT)
      }));
  }

  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ResponseVoteDto> {
    return this.votesService.findOne(id)
      .then(async (vote) => {
        let answers = [];
        if (!!vote && vote.status === status.closed) {
          answers = await this.answersService.getForVote(vote.id) as any;
        }
        return {
          ...vote,
          answers,
        }
      }) as Promise<votes>;
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateVoteDto: UpdateVoteDto) {
    const vote = await this.votesService.findOne(id) as votes;
    if (!!updateVoteDto.status) {
      if (vote.status === status.new && updateVoteDto.status === status.open) {
        return this.votesService.open(id);
      }
      if (vote.status === status.open && updateVoteDto.status == status.closed) {
        return this.votesService.close(id);
      }
    }
    throw new HttpException("Illegal operation", HttpStatus.BAD_REQUEST);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.votesService.remove(id);
  }
}
