"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
var HttpStatus = require('http-status-codes');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(9000);
}
bootstrap();
process.on('uncaughtException', console.log);
//# sourceMappingURL=main.js.map