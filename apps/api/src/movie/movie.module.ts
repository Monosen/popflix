import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Movie, MovieSchema } from './entities/movie.entity';
import { FileModule } from '../file/file.module';
import { SerieModule } from '../serie/serie.module';
import { SerieService } from '../serie/serie.service';

@Module({
  controllers: [MovieController],
  providers: [MovieService, SerieService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Movie.name,
        schema: MovieSchema,
      },
    ]),
    FileModule,
    SerieModule,
  ],
})
export class MovieModule {}
