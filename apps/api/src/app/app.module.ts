import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';
import { SerieModule } from './serie/serie.module';
import { UserModule } from './user/user.module';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    UserModule,
    MovieModule,
    SerieModule,
    ActorModule,
  ],
})
export class AppModule {}
