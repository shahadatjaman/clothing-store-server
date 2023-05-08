import { ConfigService } from '@nestjs/config';

export const Jwtconfig = async (configService: ConfigService) => ({
  secret: configService.get('JWT_SECRET_KEY'),
  signOptions: { expiresIn: configService.get('JWT_EXP_IN') },
});
