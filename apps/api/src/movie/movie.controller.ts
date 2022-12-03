import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from '../file/helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileName } from '../file/helpers/fileName.helper';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter,
      storage: diskStorage({ filename: fileName }),
    }),
  )
  create(@Body() createMovieDto: CreateMovieDto, @UploadedFile() file) {
    return this.movieService.create(createMovieDto, file);
  }

  @Get('all')
  findAll() {
    return this.movieService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.movieService.findOne(id);
  }

  @Get('seed')
  seed() {
    return this.movieService.seed();
  }

  @Get('deleteMany')
  deleteMany() {
    return this.movieService.deleteMany();
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}
