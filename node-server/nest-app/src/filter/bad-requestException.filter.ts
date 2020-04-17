import { ExceptionFilter, Catch, ArgumentsHost, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class BadRequestExceptionFilter implements ExceptionFilter {
  catch(exception: NotFoundException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    console.log('BadRequestExceptionFilter')
    response
      .status(status)
      .json({
        statusCode: status,
        timestamp: new Date().toISOString(),
        path: request.url,
      });
  }
}