import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Serie extends Document {
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

  @Prop({ type: [String], required: true })
  actors: string[];

  @Prop({
    type: String,
    required: true,
  })
  image: string;
}

export const SerieSchema = SchemaFactory.createForClass(Serie);
