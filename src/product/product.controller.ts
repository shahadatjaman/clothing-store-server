import { Body, Controller, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { ProductDTO } from './dto/porduct.dto';
import { ProductService } from './product.service';
import { Roles } from 'src/guards/Roles';
import { UserRole } from 'src/guards/role.enum';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
import { ResponseHelper } from 'src/utils/response.handler';
import { VariationDTO } from './dto/product.variation.dto';
import { VariationColorDTO } from './dto/product.color';
import { VariationSizeDTO } from './dto/product.size';
import { ProudctMaterialDTO } from './dto/product.material';

@Controller('product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    @Inject(ResponseHelper) private readonly responseHelper: ResponseHelper,
  ) {}

  // Create New Product
  @Post('create')
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create_product(@Body() product: ProductDTO, @Req() req: any) {
    const { ProductAltId } = product;

    const hasProduct = await this.productService.findProductByAltId(
      ProductAltId,
    );

    if (hasProduct) {
      return this.responseHelper.createResponse(
        403,
        'The Product already created!',
      );
    }

    return this.productService.createProduct(product);
  }

  // Create Product Variation
  @Post('create_variation')
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create_variation(@Body() variation: VariationDTO, @Req() req: any) {
    const { productAltId } = variation;

    const hasProduct = await this.productService.findProductByAltId(
      productAltId,
    );

    if (!hasProduct) {
      return this.responseHelper.createResponse(
        404,
        'Product could not found.',
      );
    }

    return this.productService.createVariation(variation);
  }

  // Create Product Variation Color
  @Post('create_color')
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create_color(@Body() values: VariationColorDTO) {
    const { variationId } = values;

    // If the variation is not exist response: Product could not found.
    const hasVariation = await this.productService.findVariationByID(
      variationId,
    );

    if (!hasVariation) {
      return this.responseHelper.createResponse(
        404,
        'Product variation could not found.',
      );
    }

    // if color is not created for this variation then create a variation otherwise response: COLOR already created.
    const hasColor = await this.productService.findColorByVariationId(
      variationId,
    );

    if (!hasColor) {
      return this.productService.createVariationColor(values);
    }

    return this.responseHelper.createResponse(
      403,
      'variation Color already created.',
    );
  }

  // Create product size
  @Post('create_size')
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create_size(@Body() values: VariationSizeDTO) {
    return this.productService.createVariationSize(values);
  }

  // Create product material
  @Post('create_material')
  @Roles(UserRole.ADMIN)
  @UseGuards(JwtAuthGuard, RolesGuard)
  async create_material(@Body() values: ProudctMaterialDTO) {
    return this.productService.createProductMaterial(values);
  }
}
