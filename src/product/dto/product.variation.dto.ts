import { IsNotEmpty } from 'class-validator';

export class VariationDTO {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  productId: string;

  @IsNotEmpty()
  productAltId: string;

  @IsNotEmpty()
  img: string;
}
