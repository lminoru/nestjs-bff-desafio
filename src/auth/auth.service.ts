import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import { UserService } from 'src/user/user.service';
import { SignInDto } from './dto/signin.dto';

@Injectable()
export class AuthService {
  // constructor(
  //   @InjectRepository(HolidayRepository)
  //   private holidayRepository: HolidayRepository,
  // ) {}

  // getAllHolidays() {
  //   return this.holidays;
  // }
  // async createHoliday(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
  //   return this.holidayRepository.createHoliday(createHolidayDto);
  // }

  constructor(
    private httpService: HttpService,
    private readonly userService: UserService,
  ) {}

  getRepos(user: string): Promise<any> {
    return lastValueFrom(
      this.httpService.get(`https://api.github.com/users/${user}/repos`, {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
    )
      .then((res) => res.data)
      .catch((err) => Error(err));
  }

  signin(signInDto: SignInDto): string {
    const { username, pwd } = signInDto;
    return `my username is ${username} with pwd ${pwd}`;
  }

  async register(userData: CreateUserDto): Promise<any> {
    return this.userService.create(userData).then((user) => {
      /*const token = this.createToken(user);*/
      return {
        /*Token: token,*/
        User: user,
      };
    });
  }
}
