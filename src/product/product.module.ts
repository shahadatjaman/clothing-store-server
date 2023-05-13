import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './schema/product';
import {
  ProductVariationtSchema,
  ProductVariation,
} from './schema/product.variation';
import { ResponseHelper } from 'src/utils/response.handler';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Product.name, schema: ProductSchema },
      { name: ProductVariation.name, schema: ProductVariationtSchema },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService, ResponseHelper],
})
export class ProductModule {}
