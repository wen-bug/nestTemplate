import { Module } from '@nestjs/common';
import { SocketIoService } from './socket-io.service';
import { SocketIoGateway } from './socket-io.gateway';

@Module({
  providers: [SocketIoGateway, SocketIoService],
})
export class SocketIoModule {}
