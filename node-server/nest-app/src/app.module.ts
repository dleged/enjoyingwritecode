import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopcarModule } from './shopcar/shopcar.module';
import Next from 'next';
// import { SsrModule } from './module/ssr/ssr.module';
import { RenderModule } from 'nest-next';

@Module({
  imports: [ShopcarModule, RenderModule.forRootAsync(Next({ dev: process.env.NODE_ENV !== 'production' }))],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
