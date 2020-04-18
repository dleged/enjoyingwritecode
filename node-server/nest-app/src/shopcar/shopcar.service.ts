import { Sku } from './interface/sku.interface';
import { Injectable,NotFoundException } from '@nestjs/common';

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

    findSingleSku(id: number){
        console.log(id,this.skuList);
        let sku = this.skuList.find((sku) => {
            console.log(sku.id, id)
            return sku.id === id;
        });
        if(!sku){ 
            return new NotFoundException();
        }
        return sku;
    }
}
