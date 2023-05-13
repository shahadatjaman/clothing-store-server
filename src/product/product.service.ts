import { Inject, Injectable } from '@nestjs/common';
import { Product, ProductDocument } from './schema/product';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { VariationDTO } from './dto/product.variation.dto';
import { ProductDTO } from './dto/porduct.dto';
import { Types } from 'mongoose';
import {
  ProductVariation,
  VariationDocument,
} from './schema/product.variation';
import { VariationColorDTO } from './dto/product.color';
import { VariationColor, VariationColorDocument } from './schema/product.color';
import { VariationSize, VariationSizeDocument } from './schema/product.size';
import { VariationSizeDTO } from './dto/product.size';
import {
  ProductMaterial,
  ProductMaterialDocument,
} from './schema/product.material';
import { ProudctMaterialDTO } from './dto/product.material';

@Injectable()
export class ProductService {
  constructor(
    // Product Model
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,

    // Product variation  model
    @InjectModel(ProductVariation.name)
    private variationModel: Model<VariationDocument>,

    // Product variatiom color model
    @InjectModel(VariationColor.name)
    private variationColorModel: Model<VariationColorDocument>,

    // Product variation size model
    @InjectModel(VariationSize.name)
    private variationSizeModel: Model<VariationSizeDocument>,

    // Product material model
    @InjectModel(ProductMaterial.name)
    private ProductMaterialModel: Model<ProductMaterialDocument>,
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
  async createVariationColor(values: VariationColorDTO) {
    try {
      const newVariationColor = await this.variationColorModel.create(values);
      return newVariationColor;
    } catch (error) {
      throw new Error(`Could not create new variation color: ${error.message}`);
    }
  }

  // Create product variatio size
  async createVariationSize(values: VariationSizeDTO) {
    try {
      const newSize = await this.variationSizeModel.create(values);
      return newSize;
    } catch (error) {
      throw new Error(
        `Could not create size of product variation: ${error.message}`,
      );
    }
  }

  // Create product material
  async createProductMaterial(values: ProudctMaterialDTO) {
    try {
      const newMaterial = await this.ProductMaterialModel.create(values);

      return newMaterial;
    } catch (error) {
      throw new Error(`Product material could not create: ${error}`);
    }
  }

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
      const _id = new Types.ObjectId(VariationId.toString());

      const variation = await this.variationModel.findOne({
        _id,
      });
      if (variation) {
        return variation;
      } else {
        null;
      }
    } catch (error) {
      throw new Error(`Could not find product variation: ${error.message}`);
    }
  }

  async findColorByVariationId(variationId: string) {
    try {
      const variationColor = await this.variationColorModel.findOne({
        variationId,
      });

      if (variationColor) {
        return variationColor;
      } else {
        return null;
      }
    } catch (error) {
      throw new Error(`Could not find variation color: ${error.message}`);
    }
  }
}
