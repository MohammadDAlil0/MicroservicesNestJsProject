import { Module } from '@nestjs/common';
import { BookstoreApiGetwayController } from './bookstore-api-getway.controller';
import { BookstoreApiGetwayService } from './bookstore-api-getway.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule],
  controllers: [BookstoreApiGetwayController],
  providers: [BookstoreApiGetwayService],
})
export class BookstoreApiGetwayModule {}
