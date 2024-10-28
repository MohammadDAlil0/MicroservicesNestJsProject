import { NestFactory } from '@nestjs/core';
import { BookstoreApiGetwayModule } from './bookstore-api-getway.module';

async function bootstrap() {
  const app = await NestFactory.create(BookstoreApiGetwayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
