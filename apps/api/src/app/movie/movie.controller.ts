import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('create')
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.create(createMovieDto);
  }

  @Get('all')
  findAll() {
    return this.movieService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(+id, updateMovieDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
