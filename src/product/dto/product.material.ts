import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class ProudctMaterialDTO {
  @IsNotEmpty()
  @IsString()
  productAltId: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(0, { message: 'Price must be a positive number' })
  price: number;

  @IsNotEmpty()
  @IsString()
  img: string;
}
