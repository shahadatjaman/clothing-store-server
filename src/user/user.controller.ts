import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userServie: UsersService) {}

  @Post('create')
  async create(@Body() createUserDto: CreateUserDto) {
    const { firstname, lastname, email, password } = createUserDto;

    return this.userServie.create_user({
      firstname,
      lastname,
      email,
      password,
    });
  }
}
