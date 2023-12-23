import { IsBoolean, IsString, MaxLength, MinLength, IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @IsOptional()
  @IsString()
  @MinLength(2)
  @MaxLength(20)
  name: string;

  @IsOptional()
  @IsBoolean()
  completed: boolean;
}
