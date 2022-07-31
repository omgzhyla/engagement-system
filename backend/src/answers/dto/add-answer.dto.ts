import { IsNumber, IsUUID } from "class-validator";
import { answers } from "../../generated/prisma-client";

export class AddAnswerDto {
  @IsNumber()
  vote_id: answers['vote_id'];
  @IsUUID()
  user_id: answers['user_id'];
  @IsNumber()
  answer: answers['answer'];
}
