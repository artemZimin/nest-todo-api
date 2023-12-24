import { IsBoolean, IsString, MaxLength, MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto {
  @ApiProperty({ required: false })
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @ApiProperty({ required: false })
  @IsOptional()
  @IsBoolean()
  completed: boolean;
}
