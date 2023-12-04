import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(payload: any): Promise<boolean | object> {
    // 在这里根据 payload 中的信息验证用户
    // 返回用户对象或 null（如果验证失败）
    // console.log(payload, 'payload');
    // console.log(this.jwtService.decode(payload));
    return this.jwtService.decode(payload);
  }

  async login(user: any) {
    const payload = { username: '拉姆', sub: '雷姆' };
    return {
      access_token: await this.jwtService.signAsync(payload), // 生成 JWT
    };
  }
}
