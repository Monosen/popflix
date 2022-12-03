import {
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsPositive,
  IsString,
  MinLength,
} from 'class-validator';

export class CreateMovieDto {
  // isString, Minlenth 1
  @IsString()
  @MinLength(1)
  name: string;

  @IsString({ each: true })
  @IsArray()
  categories: string[];

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}