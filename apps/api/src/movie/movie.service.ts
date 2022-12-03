import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { movies } from './assets/movies';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<Movie>,
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

  async seed() {
    try {
      await this.movieModel.insertMany(movies);
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const movie = await this.movieModel.findById(id).lean();

    if (!movie) {
      throw new BadRequestException(`Movie not found`);
    }

    return movie;
  }

  async deleteMany() {
    try {
      await this.movieModel.deleteMany();
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  update(id: string, updateMovieDto: UpdateMovieDto) {
    const movie = this.movieModel
      .findByIdAndUpdate(id, updateMovieDto, { new: true })
      .lean();

    if (!movie) {
      throw new BadRequestException(`Movie not found`);
    }

    return movie;
  }

  async remove(id: string) {
    const movie = await this.movieModel.findByIdAndDelete(id);

    if (!movie) {
      throw new BadRequestException(`Movie not found`);
    }
  }

  private handleExceptions(error: unknown) {
    console.log(error);
    throw new InternalServerErrorException(`Check server logs`);
  }
}
