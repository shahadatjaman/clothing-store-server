import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class ProductDTO {
  @IsNotEmpty({ message: 'The ProductAltId field cannot be empty!' })
  ProductAltId: string;

  @IsNotEmpty({ message: 'Product name cannot be empty' })
  name: string;

  // Price must be a positive number
  @IsNotEmpty({ message: 'Price cannot be empty' })
  @IsNumber({}, { message: 'Price must be a number' })
  @Min(0, { message: 'Price must be a positive number' })
  price: number;

  @IsNotEmpty({ message: 'Description cannot be empty' })
  desc: string;

  @IsNotEmpty({ message: 'Product type cannot be empty' })
  @IsString({ message: 'Product Type must be a string' })
  productType: string;
}
