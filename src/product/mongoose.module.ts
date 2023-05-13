import { Product, ProductSchema } from './schema/product';
import {
  ProductVariationtSchema,
  ProductVariation,
} from './schema/product.variation';
import { VariationColor, VariationtColorSchema } from './schema/product.color';
import { VariationSize, VariationtSizeSchema } from './schema/product.size';
import {
  ProductMaterial,
  ProductMaterialSchema,
} from './schema/product.material';

export const MongooseModels = () => {
  return [
    { name: Product.name, schema: ProductSchema },
    { name: ProductVariation.name, schema: ProductVariationtSchema },
    { name: VariationColor.name, schema: VariationtColorSchema },
    { name: VariationSize.name, schema: VariationtSizeSchema },
    { name: ProductMaterial.name, schema: ProductMaterialSchema },
  ];
};
