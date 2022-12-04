import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Serie } from '../serie/entities/serie.entity';
import { FileService } from '../file/file.service';
import { movies } from './assets/movies';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectModel(Movie.name)
    private readonly movieModel: Model<Movie>,

    @InjectModel(Serie.name)
    private readonly serieModel: Model<Serie>,

    private readonly fileService: FileService,
  ) {}

  async create(createMovieDto: CreateMovieDto, file: Express.Multer.File) {
    try {
      const { url } = await this.fileService.uploadFile(file);

      createMovieDto.name = createMovieDto.name.toLowerCase();

      const movie = await this.movieModel.create({
        ...createMovieDto,
        image: url,
      });

      return movie;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async search({ search }) {
    console.log(
      '🚀 ~ file: movie.service.ts:43 ~ MovieService ~ search ~ search',
      search,
    );
    try {
      let data = undefined;

      search = search.toString().toLowerCase();

      data = await this.movieModel.findOne({ name: search }).lean();

      if (data?.length <= 0 || !data) {
        data = await this.serieModel.find({ name: search }).lean();
      }

      return data;
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
