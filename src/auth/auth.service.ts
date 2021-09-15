import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable, lastValueFrom } from 'rxjs';

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

  constructor(private httpService: HttpService) {}

  getUsers(): Promise<any> {
    return lastValueFrom(
      this.httpService.get('https://api.github.com/users/lminoru/repos', {
        headers: { Accept: 'application/vnd.github.v3+json' },
      }),
    ).then((res) => res.data);
  }
}
