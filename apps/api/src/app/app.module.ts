import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), MovieModule],
})
export class AppModule {}
