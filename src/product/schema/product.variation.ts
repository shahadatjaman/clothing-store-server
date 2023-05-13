import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type VariationDocument = ProductVariation & Document;

@Schema()
export class ProductVariation {
  @Prop({ required: true })
  productAltId: string;

  @Prop({ required: true })
  isStock: boolean;

  @Prop({ required: true })
  img: string;
}

export const ProductVariationtSchema =
  SchemaFactory.createForClass(ProductVariation);
