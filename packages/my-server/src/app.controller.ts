import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { QueryPayload } from '../../shared/interface/simple-query';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): QueryPayload {
    return this.appService.getHello();
  }
}
