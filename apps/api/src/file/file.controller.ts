import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { FileService } from './file.service';
import { fileFilter } from './helpers/fileFilter.helper';
import { fileName } from './helpers/fileName.helper';

@Controller('file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(
    FileInterceptor('file', {
      fileFilter,
      storage: diskStorage({ filename: fileName }),
    }),
  )
  uploadFile(@UploadedFile() file) {
    return this.fileService.uploadFile(file);
  }
}
