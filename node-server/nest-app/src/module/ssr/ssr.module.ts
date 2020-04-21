import { Module,MiddlewareConsumer,RequestMethod } from '@nestjs/common';
import { nextAppFactory } from './provider/nest.provider';
import { SsrController } from './ssr.controller';

@Module({
  providers: [nextAppFactory],
  controllers: [SsrController]
})
export class SsrModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply()
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
