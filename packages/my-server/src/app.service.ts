import { Injectable } from '@nestjs/common';
import { QueryPayload } from '../../shared/interface/simple-query';
@Injectable()
export class AppService {
  getHello(props: QueryPayload): string {
    console.log(props);
    return 'Hello World!';
  }
}
