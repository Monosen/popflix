import { Module } from '@nestjs/common';
import { FileService } from './file.service';
import { FileController } from './file.controller';
import { CloudinaryProvider } from './utils/cloudinary.provider';

@Module({
  controllers: [FileController],
  providers: [FileService, CloudinaryProvider],
  exports: [FileService, CloudinaryProvider],
})
export class FileModule {}
