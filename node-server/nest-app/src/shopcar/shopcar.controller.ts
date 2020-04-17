import { Controller,Get,Param } from '@nestjs/common';
import { ShopcarService } from './shopcar.service';
import { Sku } from './interface/sku.interface';


@Controller('shopcar')
export class ShopcarController {
    constructor(private readonly shopcarService: ShopcarService){}

    @Get('/:sku/:price/?:count')
    insertSkuToShopcar(@Param() Sku){
        return this.shopcarService.insertSkuToShopcar({...Sku});
    }

    @Get('/list')
    getShopcar(): Sku[]{
        return this.shopcarService.getShopcar();
    }
}
