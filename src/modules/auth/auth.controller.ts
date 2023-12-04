import { Controller, Post, UseGuards, Request, Get } from '@nestjs/common';
import { AuthGuard } from './jwt.auth.guard';
import { AuthService } from './auth.service';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.body);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    //jwt解析完会自动放入req.user对象中
    console.log(req.user);
    return req.user;
  }
}
