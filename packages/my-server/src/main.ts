import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = 3000;
  const app = await NestFactory.create(AppModule, { cors: true });

  app.enableCors({
    origin: ['http://localhost:3001'],
  });

  await app.listen(port, (): void => console.log(`listening on port ${port}`));
}
bootstrap();
