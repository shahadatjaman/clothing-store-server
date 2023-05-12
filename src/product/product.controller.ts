import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ProductDTO } from './dto/porduct.dto';
import { ProductService } from './product.service';
import { Roles } from 'src/guards/Roles';
import { UserRole } from 'src/guards/role.enum';
import { RolesGuard } from 'src/guards/roles.guard';
import { JwtAuthGuard } from 'src/auth/jwt.auth.guard';
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post('create')
  @UseGuards(JwtAuthGuard)
  async create_product(@Body() product: ProductDTO) {
    return this.productService.createProduct(product);
  }
}
