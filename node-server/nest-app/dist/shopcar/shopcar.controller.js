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
    insertSkuToShopcar(Sku) {
        return this.shopcarService.insertSkuToShopcar(Object.assign({}, Sku));
    }
    getShopcar() {
        return this.shopcarService.getShopcar();
    }
};
__decorate([
    common_1.Get('/:sku/:price/?:count'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ShopcarController.prototype, "insertSkuToShopcar", null);
__decorate([
    common_1.Get('/list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], ShopcarController.prototype, "getShopcar", null);
ShopcarController = __decorate([
    common_1.Controller('shopcar'),
    __metadata("design:paramtypes", [shopcar_service_1.ShopcarService])
], ShopcarController);
exports.ShopcarController = ShopcarController;
//# sourceMappingURL=shopcar.controller.js.map