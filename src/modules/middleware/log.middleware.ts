import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class LogMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('log middleware');

    next();
  }
}
// or 函数式
// export function logger(req, res, next) {
//   console.log(`Request...`);
//   next();
// };
