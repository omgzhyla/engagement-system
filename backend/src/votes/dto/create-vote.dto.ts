import { IsJSON, IsString, Length } from "class-validator";
import { votes } from "../../generated/prisma-client";

export class CreateVoteDto {
  id?: number;
  @IsString()
  @Length(1, 255)
  title: votes['title'];
  @IsString()
  @Length(1,255)
  description: votes['description'];
  options: votes['options'];
}
