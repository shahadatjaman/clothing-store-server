import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class VariationSizeDTO {
  @IsNotEmpty()
  @IsString()
  productAltId: string;

  @IsNotEmpty()
  @IsString()
  variationId: string;

  @IsNotEmpty()
  @IsString()
  size: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: 'Price must be a positive number' })
  price: number;
}
