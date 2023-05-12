import { Injectable } from '@nestjs/common';
import { ProductDocument } from './schema/product';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VariationDTO } from './dto/product.variation.dto';
import { ProductDTO } from './dto/porduct.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private productModel: Model<ProductDocument>,
    @InjectModel('Product') private variationModel: Model<ProductDocument>,
  ) {}

  async createProduct(values: ProductDTO) {
    try {
      const newProduct = await this.productModel.create(values);
      return newProduct;
    } catch (error) {
      throw new Error(`Could not create new product: ${error.message}`);
    }
  }

  async createVariation(values: VariationDTO) {
    try {
      const newVariation = await this.variationModel.create(values);
      return newVariation;
    } catch (error) {
      throw new Error(`Could not create new variation: ${error.message}`);
    }
  }
}
