import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopcarModule } from './shopcar/shopcar.module';
import { SsrModule } from './module/ssr/ssr.module';

@Module({
  imports: [ShopcarModule, SsrModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
