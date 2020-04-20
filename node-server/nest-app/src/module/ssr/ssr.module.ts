import { Module } from '@nestjs/common';
import { nextAppFactory } from './provider/nest.provider';
import { SsrController } from './ssr.controller';

@Module({
  providers: [nextAppFactory],
  controllers: [SsrController]
})
export class SsrModule {}
