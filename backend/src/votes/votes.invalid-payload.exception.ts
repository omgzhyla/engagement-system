import { BadRequestException } from "@nestjs/common";

export class VotesInvalidPayloadException extends BadRequestException {
  constructor() {
    super('Vote validation failed');
  }
}
