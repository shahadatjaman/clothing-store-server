import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule } from '@nestjs/mongoose';

import { ResponseHelper } from 'src/utils/response.handler';

import { MongooseModels } from './mongoose.module';

@Module({
  imports: [MongooseModule.forFeature(MongooseModels())],
  controllers: [ProductController],
  providers: [ProductService, ResponseHelper],
})
export class ProductModule {}
