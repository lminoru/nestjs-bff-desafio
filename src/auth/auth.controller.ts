import { Body, Controller, Get, HttpCode, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignInDto } from './dto/signin.dto';
import { CreateUserDto } from './../user/dto/createUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('repo/:user')
  getReposFromUser(@Param('user') user: string): Promise<any> {
    return this.authService.getRepos(user);
  }

  @Post('signin')
  @HttpCode(202)
  authenticateUser(@Body() signinDto: SignInDto): string {
    return this.authService.signin(signinDto);
  }

  @Post('signup')
  @HttpCode(201)
  registerUser(@Body() user: CreateUserDto): Promise<any> {
    return this.authService.register(user);
  }
}
