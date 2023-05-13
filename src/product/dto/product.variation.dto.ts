import { IsNotEmpty } from 'class-validator';

export class VariationDTO {
  @IsNotEmpty()
  productAltId: string;

  @IsNotEmpty()
  isStock: boolean;

  @IsNotEmpty()
  img: string;
}
