import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VariationSizeDocument = VariationSize & Document;

@Schema()
export class VariationSize {
  @Prop({ required: true })
  productAltId: string;

  @Prop({ required: true })
  variationId: string;

  @Prop({ required: true })
  size: string;

  @Prop({ required: true })
  price: number;
}

export const VariationtSizeSchema = SchemaFactory.createForClass(VariationSize);
