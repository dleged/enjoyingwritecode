import { Controller, Get, UseFilters } from '@nestjs/common';
import { AppService } from './app.service';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { BadRequestExceptionFilter } from './filter/bad-requestException.filter'

@UseFilters(HttpExceptionFilter)
@UseFilters(BadRequestExceptionFilter)
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/home')
  getHome(res): string{
    return this.appService.getHome();
  }

  // @Get('*')
  // getAllPage(res): string{
  //   return this.appService.getHome();
  // }
}
