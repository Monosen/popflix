import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

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
    type: Number,
    required: true,
  })
  punctuation: number;

  @Prop({
    type: String,
    required: true,
  })
  image: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
