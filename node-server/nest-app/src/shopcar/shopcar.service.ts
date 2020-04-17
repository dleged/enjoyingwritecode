import { Injectable } from '@nestjs/common';
import { Sku } from './interface/sku.interface';

@Injectable()
export class ShopcarService {
    private readonly skuList: Sku[] = [];

    getShopcar(): Sku[]{
        return this.skuList;
    }

    insertSkuToShopcar(sku: Sku){
        this.skuList.push(sku);
        return this.skuList;
    }
}
