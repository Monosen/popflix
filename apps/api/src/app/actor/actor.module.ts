import { Module } from '@nestjs/common';
import { ActorService } from './actor.service';
import { ActorController } from './actor.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Actor, ActorSchema } from './entities/actor.entity';

@Module({
  controllers: [ActorController],
  providers: [ActorService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Actor.name,
        schema: ActorSchema,
      },
    ]),
  ],
})
export class ActorModule {}
