import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete, ParseIntPipe, UsePipes,
} from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';
import { UpdateVoteDto } from './dto/update-vote.dto';
import { ValidationPipe } from "../validation.pipe";
import { AnswersService } from "../answers/answers.service";

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
  async answer(@Param('id', ParseIntPipe) id: number, @Body() addAnswerDto:AddAnswerDto) {
    const vote = this.votesService.findOne(id);
    this.answersService.create({ data: addAnswerDto });
  }

  @Get()
  findAll() {
    return this.votesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.votesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateVoteDto: UpdateVoteDto) {
    return this.votesService.update(id, updateVoteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.votesService.remove(id);
  }
}
