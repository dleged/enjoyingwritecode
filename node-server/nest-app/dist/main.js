"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
var HttpStatus = require('http-status-codes');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = new swagger_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.use(async (req, res, next) => {
        switch (res.statusCode) {
            case HttpStatus.OK:
                res.status(HttpStatus.OK);
                break;
            case HttpStatus.NOT_FOUND:
                res.send('this page is not found 🙅‍♂️');
                break;
            case HttpStatus.UNAUTHORIZED:
                res.send('this page is not found 🙅‍♂️');
                res.redirect(301, 'http://example.com');
                break;
            default:
                break;
        }
        next();
    });
    await app.listen(9000);
}
process.on('uncaughtException', console.log);
//# sourceMappingURL=main.js.map