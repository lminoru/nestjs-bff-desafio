import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @HttpCode(202)
  signIn(/*@Body() credent: AuthCredentDto*/): Promise<any> {
    return this.authService.getUsers();
  }
}
