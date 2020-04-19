import { NotFoundException } from '@nestjs/common';
import { ShopcarService } from './shopcar.service';
import { Sku } from './interface/sku.interface';
export declare class ShopcarController {
    private readonly shopcarService;
    constructor(shopcarService: ShopcarService);
    insertSkuToShopcar(name: string, price: string, count: number): Sku[];
    getShopcar(): Sku[];
    getSingleSku(id: number): Sku | NotFoundException;
}
