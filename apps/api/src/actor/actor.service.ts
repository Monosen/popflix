import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';
import { Actor } from './entities/actor.entity';

@Injectable()
export class ActorService {
  constructor(
    @InjectModel(Actor.name)
    private readonly actorModel: Model<Actor>
  ) {}

  async create(createActorDto: CreateActorDto) {
    try {
      const actor = await this.actorModel.create(createActorDto);

      return actor;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findAll() {
    try {
      const actors = await this.actorModel.find().lean();

      return actors;
    } catch (error) {
      this.handleExceptions(error);
    }
  }

  async findOne(id: string) {
    const actor = await this.actorModel.findById(id).lean();

    if (!actor) {
      throw new BadRequestException(`Actor not found`);
    }

    return actor;
  }

  async update(id: string, updateActorDto: UpdateActorDto) {
    const actor = await this.actorModel
      .findByIdAndUpdate(id, updateActorDto, { new: true })
      .lean();

    if (!actor) {
      throw new BadRequestException(`Actor not found`);
    }

    return actor;
  }

  async remove(id: string) {
    const actor = await this.actorModel.findByIdAndDelete(id);

    if (!actor) {
      throw new BadRequestException(`Actor not found`);
    }
  }

  private handleExceptions(error: unknown) {
    console.log(error);
    throw new InternalServerErrorException(`Check server logs`);
  }
}
