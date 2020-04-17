import { Module } from '@nestjs/common';
import { ShopcarService } from './shopcar.service';
import { ShopcarController } from './shopcar.controller';
 
@Module({
  controllers: [ShopcarController],
  providers: [ShopcarService]
})
export class ShopcarModule {}
