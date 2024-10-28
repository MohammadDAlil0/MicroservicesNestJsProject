import { Injectable } from '@nestjs/common';

@Injectable()
export class BookstoreApiGetwayService {
  getHello(): string {
    return 'Hello World!';
  }
}
