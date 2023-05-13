import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductMaterialDocument = ProductMaterial & Document;

@Schema()
export class ProductMaterial {
  @Prop({ required: true })
  productAltId: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  img: string;

  @Prop({ required: true })
  price: number;
}

export const ProductMaterialSchema =
  SchemaFactory.createForClass(ProductMaterial);
