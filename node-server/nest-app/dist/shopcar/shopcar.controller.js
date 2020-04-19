"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const shopcar_service_1 = require("./shopcar.service");
let ShopcarController = class ShopcarController {
    constructor(shopcarService) {
        this.shopcarService = shopcarService;
    }
    insertSkuToShopcar(name, price, count) {
        return this.shopcarService.insertSkuToShopcar({
            'id': Math.random(),
            name,
            price,
            count
        });
    }
    getShopcar() {
        return this.shopcarService.getShopcar();
    }
    getSingleSku(id) {
        return this.shopcarService.findSingleSku(Number(id));
    }
};
__decorate([
    common_1.Post('/'),
    __param(0, common_1.Body('name')), __param(1, common_1.Body('price')), __param(2, common_1.Body('count')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number]),
    __metadata("design:returntype", void 0)
], ShopcarController.prototype, "insertSkuToShopcar", null);
__decorate([
    common_1.Get('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ShopcarController.prototype, "getShopcar", null);
__decorate([
    common_1.Get('/find/?:id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], ShopcarController.prototype, "getSingleSku", null);
ShopcarController = __decorate([
    common_1.Controller('shopcar'),
    __metadata("design:paramtypes", [shopcar_service_1.ShopcarService])
], ShopcarController);
exports.ShopcarController = ShopcarController;
//# sourceMappingURL=shopcar.controller.js.map