import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { isMainThread } from 'worker_threads';
 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  await app.listen(9000,() => {
    console.log('server listening on port localhost:9000');
  });
}

bootstrap();

process.on('uncaughtException', console.log);
