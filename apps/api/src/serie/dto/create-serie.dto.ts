import { IsArray, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateSerieDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString({ each: true })
  @IsArray()
  categories: string[];

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString({ each: true })
  @IsArray()
  actors: string[];

  @IsString()
  @IsNotEmpty()
  video: string;
}
