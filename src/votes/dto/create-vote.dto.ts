import { IsJSON, IsString, Length, MaxLength } from "class-validator";

export class CreateVoteDto {
  @IsString()
  @Length(1, 255)
  title: string;
  @IsString()
  @Length(1,255)
  description: string;
  @IsJSON()
  answers: string;
}
