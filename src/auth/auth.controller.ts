import { Body, Controller, Post } from '@nestjs/common';
import { Req, UseGuards } from '@nestjs/common/decorators';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local.auth.guard';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() body: CreateUserDto) {
    return this.authService.signUp(body);
  }
  @UseGuards(LocalAuthGuard)
  @Post('signin')
  async signIn(@Body() body: LoginUserDto, @Req() req: any) {
    return this.authService.signIn(req.user);
  }
}
