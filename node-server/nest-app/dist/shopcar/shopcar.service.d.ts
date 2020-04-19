import { Sku } from './interface/sku.interface';
import { NotFoundException } from '@nestjs/common';
export declare class ShopcarService {
    private readonly skuList;
    getShopcar(): Sku[];
    insertSkuToShopcar(sku: Sku): Sku[];
    findSingleSku(id: number): Sku | NotFoundException;
}
