import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class FileService {
  async uploadFile(file: Express.Multer.File) {
    try {
      const { url } = await this.uploadImagesToCloudinary(file);

      return { url };
    } catch (error) {
      console.log(
        '🚀 ~ file: file.service.ts:10 ~ FileService ~ uploadFile ~ error',
        error,
      );
      throw new InternalServerErrorException('Please check logs');
    }
  }

  async uploadImagesToCloudinary(file: Express.Multer.File) {
    const img = await this.saveFile(file);

    return { url: img };
  }

  private async saveFile(file: Express.Multer.File): Promise<string> {
    const { secure_url: secureUrl } = await cloudinary.uploader.upload(
      file.path,
      { folder: 'popflix' },
    );
    return secureUrl;
  }
}
