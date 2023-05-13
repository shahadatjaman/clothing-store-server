import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VariationColorDocument = VariationColor & Document;

@Schema()
export class VariationColor {
  @Prop({ required: true })
  productAltId: string;

  @Prop({ required: true })
  variationId: string;

  @Prop({ required: true })
  color: string;

  @Prop()
  color_name: string;
}

export const VariationtColorSchema =
  SchemaFactory.createForClass(VariationColor);
