import { IsBoolean, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateTodoDto {
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @IsBoolean()
  completed: boolean;
}