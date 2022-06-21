import { Injectable } from '@nestjs/common';
import { QueryPayload } from '../../shared/interface/simple-query';
@Injectable()
export class AppService {
  getHello(): QueryPayload {
    console.log('getHello');
    return { payload: 'Hello World!' };
  }
}
