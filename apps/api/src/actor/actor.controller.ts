import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ActorService } from './actor.service';
import { CreateActorDto } from './dto/create-actor.dto';
import { UpdateActorDto } from './dto/update-actor.dto';

@Controller('actor')
export class ActorController {
  constructor(private readonly actorService: ActorService) {}

  @Post('create')
  create(@Body() createActorDto: CreateActorDto) {
    return this.actorService.create(createActorDto);
  }

  @Get('all')
  findAll() {
    return this.actorService.findAll();
  }

  @Get('one/:id')
  findOne(@Param('id') id: string) {
    return this.actorService.findOne(id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateActorDto: UpdateActorDto) {
    return this.actorService.update(id, updateActorDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.actorService.remove(id);
  }
}
