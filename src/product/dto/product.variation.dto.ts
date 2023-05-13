import { IsNotEmpty } from 'class-validator';

export class VariationDTO {
  @IsNotEmpty()
  productAltId: string;

  @IsNotEmpty()
  img: string;
}
