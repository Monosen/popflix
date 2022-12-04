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
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileFilter } from '../file/helpers/fileFilter.helper';
import { diskStorage } from 'multer';
import { fileName } from '../file/helpers/fileName.helper';
import { RolesGuard, JwtGuard } from '../user/guard';
import { Roles } from '../user/decorator';

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
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
  findAll() {
    return this.movieService.findAll();
  }

  @Get('one/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
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

  @Post('search')
  search(@Body() searchMovieDto: string) {
    return this.movieService.search(searchMovieDto);
  }

  @Patch('update/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(id, updateMovieDto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.movieService.remove(id);
  }
}
