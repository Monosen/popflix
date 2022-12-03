import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieModule } from './movie/movie.module';
import { SerieModule } from './serie/serie.module';
import { UserModule } from './user/user.module';
import { ActorModule } from './actor/actor.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(
      'mongodb+srv://popflix:S9MR3DlMeU1bPdPQ@popflix.3lrvwcj.mongodb.net/?retryWrites=true&w=majority',
    ),
    UserModule,
    MovieModule,
    SerieModule,
    ActorModule,
  ],
})
export class AppModule {}
