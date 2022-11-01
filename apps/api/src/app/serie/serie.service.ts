import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateSerieDto } from './dto/create-serie.dto';
import { UpdateSerieDto } from './dto/update-serie.dto';
import { Serie } from './entities/serie.entity';

@Injectable()
export class SerieService {
  constructor(
    @InjectModel(Serie.name)
    private readonly serieModel: Model<Serie>
  ) {}

  async create(createSerieDto: CreateSerieDto) {
    try {
      const serie = await this.serieModel.create(createSerieDto);

      return serie;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const series = await this.serieModel.find().exec();

      return series;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const serie = await this.serieModel.findById(id).exec();

    if (!serie) {
      throw new InternalServerErrorException(`Serie with id ${id} not found`);
    }

    return serie;
  }

  async update(id: string, updateSerieDto: UpdateSerieDto) {
    const serie = await this.serieModel
      .findByIdAndUpdate(id, updateSerieDto)
      .exec();

    if (!serie) {
      throw new InternalServerErrorException(`Serie with id ${id} not found`);
    }

    return serie;
  }

  async remove(id: string) {
    const serie = await this.serieModel.findByIdAndDelete(id).exec();

    if (!serie) {
      throw new InternalServerErrorException(`Serie with id ${id} not found`);
    }
  }

  private handleExceptions(error: unknown) {
    console.log(error);
    throw new InternalServerErrorException(`Check server logs`);
  }
}
