import { Controller,Get } from '@nestjs/common';

@Controller('ssr')
export class SsrController {
    @Get(':project*')
    getHello(): string {
        return 'Hello Ssr Router!';
    }
}
