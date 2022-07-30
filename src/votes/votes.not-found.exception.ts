import { HttpException } from "@nestjs/common";

export class VotesNotFoundException extends HttpException {
  constructor() {
    super('Vote not found');
  }
}
