import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop({ required: true })
  ProductAltId: string;

  @Prop({ required: true })
  name: string;

  @Prop({
    type: Number,
    validate: {
      validator: (value) => typeof value === 'number',
      message: 'Price must be a number',
    },
  })
  price: number;

  @Prop({ type: String, required: true })
  desc: string;

  @Prop({ type: String, required: true })
  productType: string;

  @Prop({
    type: Number,
    validate: {
      validator: (value) => typeof value === 'number',
      message: 'SKU must be a number',
    },
  })
  SKU: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
