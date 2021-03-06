"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let ShopcarService = class ShopcarService {
    constructor() {
        this.skuList = [];
    }
    getShopcar() {
        return this.skuList;
    }
    insertSkuToShopcar(sku) {
        this.skuList.push(sku);
        return this.skuList;
    }
    findSingleSku(id) {
        console.log(id, this.skuList);
        let sku = this.skuList.find((sku) => {
            console.log(sku.id, id);
            return sku.id === id;
        });
        if (!sku) {
            return new common_1.NotFoundException();
        }
        return sku;
    }
};
ShopcarService = __decorate([
    common_1.Injectable()
], ShopcarService);
exports.ShopcarService = ShopcarService;
//# sourceMappingURL=shopcar.service.js.map