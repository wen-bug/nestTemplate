import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
// Controller
import { AppController } from './app.controller';
// service
import { AppService } from './app.service';
// module
import { SocketIoModule } from './modules/socket-io/socket-io.module';
import { AmdModule } from './modules/amd/amd.module';
import { AuthModule } from './modules/auth/auth.module';
// middleware
import { LogMiddleware } from './modules/middleware/log.middleware';
import { DbModule } from './modules//db/db.module';
@Module({
  imports: [SocketIoModule, AmdModule, DbModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LogMiddleware)
      .exclude() //排除路由
      .forRoutes('*'); //设置匹配的路由
  }
}
