import { Controller, Get } from '@nestjs/common';
import { BookstoreApiGetwayService } from './bookstore-api-getway.service';

@Controller()
export class BookstoreApiGetwayController {
  constructor(private readonly bookstoreApiGetwayService: BookstoreApiGetwayService) {}

  @Get()
  getHello(): string {
    return this.bookstoreApiGetwayService.getHello();
  }
}
