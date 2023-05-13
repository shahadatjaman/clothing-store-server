import { Inject, Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './schema/product';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VariationDTO } from './dto/product.variation.dto';
import { ProductDTO } from './dto/porduct.dto';
import {
  ProductVariation,
  VariationDocument,
} from './schema/product.variation';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
    @InjectModel(ProductVariation.name)
    private variationModel: Model<VariationDocument>,
    @Inject('REQUEST') private request: Request,
  ) {}

  // Create a new Product
  async createProduct(values: ProductDTO) {
    try {
      const newProduct = await this.productModel.create(values);
      return newProduct;
    } catch (error) {
      throw new Error(`Could not create new product: ${error.message}`);
    }
  }

  // Create a Product variation
  async createVariation(values: VariationDTO) {
    try {
      const newVariation = await this.variationModel.create(values);
      return newVariation;
    } catch (error) {
      throw new Error(`Could not create new variation: ${error.message}`);
    }
  }

  // Create a Product Color of variation
  async createVariationColor(values: any) {}

  // Find a product By ProductAltId
  async findProductByAltId(ProductAltId: string) {
    try {
      const product = await this.productModel.findOne({ ProductAltId });
      if (product) {
        return product;
      } else {
        null;
      }
    } catch (error) {
      throw new Error(`Could not find product: ${error.message}`);
    }
  }

  // Find a product variation By product variation ID
  async findVariationByID(VariationId: string) {
    try {
      const variation = await this.variationModel.findOne({ VariationId });
      if (variation) {
        return variation;
      } else {
        null;
      }
    } catch (error) {
      throw new Error(`Could not find product variation: ${error.message}`);
    }
  }
}
