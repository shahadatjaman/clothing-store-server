import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userServie: UsersService) {}

  @Post('create')
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { firstname, lastname, email, password } = createUserDto;

    return this.userServie.createUser({
      firstname,
      lastname,
      email,
      password,
    });
  }
}
