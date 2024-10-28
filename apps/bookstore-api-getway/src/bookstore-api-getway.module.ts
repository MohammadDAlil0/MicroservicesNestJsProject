import { Module } from '@nestjs/common';
import { BookstoreApiGetwayController } from './bookstore-api-getway.controller';
import { BookstoreApiGetwayService } from './bookstore-api-getway.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [UsersModule, BooksModule],
  controllers: [BookstoreApiGetwayController],
  providers: [BookstoreApiGetwayService],
})
export class BookstoreApiGetwayModule {}
