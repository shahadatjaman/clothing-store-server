import { Injectable } from '@nestjs/common';

@Injectable()
export class ResponseHelper {
  createResponse(statusCode: number, message: string, payload?: any) {
    return {
      statusCode,
      message,
      payload,
    };
  }
}
