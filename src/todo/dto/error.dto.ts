import { ApiProperty } from '@nestjs/swagger';

export class ErrorDto {
  @ApiProperty()
  message: Array<string>

  @ApiProperty()
  error: string

  @ApiProperty()
  statusCode: number
}