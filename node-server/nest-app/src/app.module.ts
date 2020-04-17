import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopcarModule } from './shopcar/shopcar.module';

@Module({
  imports: [ShopcarModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
