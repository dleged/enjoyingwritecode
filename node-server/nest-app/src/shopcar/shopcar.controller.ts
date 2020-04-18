import { Controller, Body, Get, Post, Param, NotFoundException } from '@nestjs/common';
import { ShopcarService } from './shopcar.service';
import { Sku } from './interface/sku.interface';
import { get } from 'https';


@Controller('shopcar')
export class ShopcarController {
    constructor(private readonly shopcarService: ShopcarService) { }

    @Post('/')
    insertSkuToShopcar(@Body('name') name: string, @Body('price') price: string, @Body('count') count: number) {
        return this.shopcarService.insertSkuToShopcar({
            'id': Math.random(), 
            name, 
            price, 
            count 
        });
    }

    @Get('/list')
    getShopcar(): Sku[] {
        return this.shopcarService.getShopcar();
    }

    @Get('/find/?:id')
    getSingleSku(@Param('id') id: number) {
        return this.shopcarService.findSingleSku(Number(id));
    }
}
