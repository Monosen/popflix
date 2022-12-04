import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Movie extends Document {
  @Prop({
    unique: true,
    index: true,
    required: true,
  })
  name: string;

  @Prop({
    type: [String],
    required: true,
  })
  categories: string[];

  @Prop({
    type: String,
    required: true,
  })
  description: string;

  @Prop({
    type: String,
    required: true,
  })
  image: string;

  @Prop({
    type: String,
    required: true,
  })
  video: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
