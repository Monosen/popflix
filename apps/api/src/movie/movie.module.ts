import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './entities/movie.entity';
import { FileModule } from '../file/file.module';

@Module({
  controllers: [MovieController],
  providers: [MovieService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Movie.name,
        schema: MovieSchema,
      },
    ]),
    FileModule,
  ],
})
export class MovieModule {}
