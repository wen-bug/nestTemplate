import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret, // 替换为你自己的密钥
      signOptions: { expiresIn: '1h' }, // 设置 JWT 的过期时间
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
