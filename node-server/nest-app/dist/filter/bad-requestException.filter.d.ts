import { ExceptionFilter, ArgumentsHost, NotFoundException } from '@nestjs/common';
export declare class BadRequestExceptionFilter implements ExceptionFilter {
    catch(exception: NotFoundException, host: ArgumentsHost): void;
}
