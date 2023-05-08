import { IsEmail, IsNotEmpty, IsString, IsNumber } from 'class-validator';

export class UserDto {
  @IsNotEmpty()
  _id: string;

  @IsNotEmpty()
  firstname: string;

  @IsNotEmpty()
  lastname: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  roles: String[];
}
