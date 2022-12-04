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
  UseGuards,
} from '@nestjs/common';
import { SerieService } from './serie.service';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { diskStorage } from 'multer';
import { fileName } from '../file/helpers/fileName.helper';
import { fileFilter } from '../file/helpers/fileFilter.helper';
import { FileInterceptor } from '@nestjs/platform-express';
import { JwtGuard, RolesGuard } from '../user/guard';
import { Roles } from '../user/decorator';

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
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
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
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
  findOne(@Param('id') id: string) {
    return this.serieService.findOne(id);
  }

  @Patch('update/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('client')
  update(@Param('id') id: string, @Body() updateSerieDto: UpdateSerieDto) {
    return this.serieService.update(id, updateSerieDto);
  }

  @Delete('delete/:id')
  @UseGuards(JwtGuard, RolesGuard)
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.serieService.remove(id);
  }
}
