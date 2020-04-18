import { ShopcarService } from './shopcar.service';
import { Sku } from './interface/sku.interface';
export declare class ShopcarController {
    private readonly shopcarService;
    constructor(shopcarService: ShopcarService);
    insertSkuToShopcar(Sku: any): Sku[] | import("@nestjs/common").NotFoundException;
    getShopcar(): Sku[];
}
