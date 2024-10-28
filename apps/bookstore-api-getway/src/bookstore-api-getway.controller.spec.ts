import { Test, TestingModule } from '@nestjs/testing';
import { BookstoreApiGetwayController } from './bookstore-api-getway.controller';
import { BookstoreApiGetwayService } from './bookstore-api-getway.service';

describe('BookstoreApiGetwayController', () => {
  let bookstoreApiGetwayController: BookstoreApiGetwayController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [BookstoreApiGetwayController],
      providers: [BookstoreApiGetwayService],
    }).compile();

    bookstoreApiGetwayController = app.get<BookstoreApiGetwayController>(BookstoreApiGetwayController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(bookstoreApiGetwayController.getHello()).toBe('Hello World!');
    });
  });
});
