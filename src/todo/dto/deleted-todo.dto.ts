import { ApiProperty } from '@nestjs/swagger';

export class DeletedTodoDto {
  @ApiProperty()
  deleted: number
}
