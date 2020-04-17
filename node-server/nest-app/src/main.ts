import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { isMainThread } from 'worker_threads';

var HttpStatus = require('http-status-codes');
 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(async (req,res,next) => {

    switch(res.statusCode){
      case HttpStatus.OK:
        res.status(HttpStatus.OK);
        break;
      case  HttpStatus.NOT_FOUND:
        res.send('this page is not found 🙅‍♂️');
        break;
      case  HttpStatus.UNAUTHORIZED:
        res.send('this page is not found 🙅‍♂️');
        res.redirect(301, 'http://example.com');
        break;   
      default :
        break;
    }
    next();
  })

  await app.listen(3000);
}
const server = bootstrap();

process.on('uncaughtException', console.log);
