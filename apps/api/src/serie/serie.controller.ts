import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { diskStorage } from 'multer';
import { fileName } from '../file/helpers/fileName.helper';
import { fileFilter } from '../file/helpers/fileFilter.helper';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('serie')
export class SerieController {
  constructor(private readonly serieService: SerieService) {}

  @Post('create')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter,
      storage: diskStorage({ filename: fileName }),
    }),
  )
  create(@Body() createSerieDto: CreateSerieDto, @UploadedFile() file) {
    return this.serieService.create(createSerieDto, file);
  }

  @Get('all')
  findAll() {
    return this.serieService.findAll();
  }

  @Get('seed')
  seed() {
    return this.serieService.seed();
  }

  @Get('deleteMany')
  deleteMany() {
    return this.serieService.deleteMany();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.serieService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateSerieDto: UpdateSerieDto) {
    return this.serieService.update(id, updateSerieDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.serieService.remove(id);
  }
}
