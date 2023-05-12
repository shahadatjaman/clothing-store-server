import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = ProductVariation & Document;

@Schema()
export class ProductVariation {
  @Prop({ required: true })
  _id: string;

  @Prop({ required: true })
  productId: string;

  @Prop({ required: true })
  productAltId: string;

  @Prop({ required: true })
  img: string;
}

export const ProducVariationtSchema =
  SchemaFactory.createForClass(ProductVariation);
