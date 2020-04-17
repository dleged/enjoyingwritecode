import { Sku } from './interface/sku.interface';
export declare class ShopcarService {
    private readonly skuList;
    getShopcar(): Sku[];
    insertSkuToShopcar(sku: Sku): Sku[];
}
