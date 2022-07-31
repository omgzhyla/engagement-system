import { HttpException, HttpStatus } from "@nestjs/common";

export class VotesNotFoundException extends HttpException {
  constructor() {
    super('Vote not found', HttpStatus.NOT_FOUND);
  }
}
