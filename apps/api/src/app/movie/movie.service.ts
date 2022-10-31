import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<Movie>
  ) {}

  async create(createMovieDto: CreateMovieDto) {
    try {
      const movie = await this.movieModel.create(createMovieDto);

      return movie;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const movies = await this.movieModel.find().lean();

      return movies;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: number) {
    const movie = await this.movieModel.findById(id).lean();

    if (!movie) {
      throw new BadRequestException(`Movie not found`);
    }

    return movie;
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    const movie = this.movieModel.findByIdAndUpdate(id, updateMovieDto).lean();

    if (!movie) {
      throw new BadRequestException(`Movie not found`);
    }

    return movie;
  }

  async remove(id: number) {
    const movie = await this.movieModel.findByIdAndDelete(id);

    if (!movie) {
      throw new BadRequestException(`Movie not found`);
    }
  }

  private handleExceptions(error: any) {
    console.log(error);
    throw new InternalServerErrorException(`Check server logs`);
  }
}
