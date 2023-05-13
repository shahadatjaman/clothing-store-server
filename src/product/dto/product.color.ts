import { IsNotEmpty, IsString } from 'class-validator';

export class VariationColorDTO {
  @IsNotEmpty()
  @IsString()
  productAltId: string;

  @IsNotEmpty()
  @IsString()
  variationId: string;

  @IsNotEmpty()
  @IsString()
  color: string;

  @IsNotEmpty()
  @IsString()
  color_name: string;
}
