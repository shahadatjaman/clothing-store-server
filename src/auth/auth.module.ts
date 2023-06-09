import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ResponseHelper } from 'src/utils/response.handler';
import { UsersModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { LocalStrategy } from './LocalStrategy';
import { jwtConstants } from './constants';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
    UsersModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, ResponseHelper, LocalStrategy, JwtStrategy],
  exports: [JwtModule],
})
export class AuthModule {}
