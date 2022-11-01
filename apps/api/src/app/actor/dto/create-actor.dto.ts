import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateActorDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  @IsNotEmpty()
  image: string;
}
