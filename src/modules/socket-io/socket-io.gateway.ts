import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { SocketIoService } from './socket-io.service';

import { Server, Socket } from 'socket.io';
import { Msg, item } from './dto/msg-socket-io.dto';
@WebSocketGateway(3003, {
  cors: {
    origin: '*',
  },
  transports: ['websocket'],
})
export class SocketIoGateway {
  @WebSocketServer()
  server: Server;
  liveList: Map<string, item> = new Map();
  msg: Msg;
  constructor(private readonly socketIoService: SocketIoService) {}

  handleConnection(client: Socket) {
    client.join('test');
    //socktio 默认会加入一个名为client.id的房间
    this.server.sockets.adapter.rooms.delete(client.id);
    client.emit('test', Buffer.from('assc', 'ascii'));
    console.log(
      client.handshake.auth,
      client.id,
      this.server.engine.clientsCount,
    );
    //身份验证
  }
  handleDisconnect(client: Socket, ...args: any[]) {
    client.disconnect(true);

    console.log(this.server.sockets.sockets.keys());

    console.log('client disconnected');
  }

  @SubscribeMessage('broadcastRoom')
  broadcastRoom(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    this.server.to('aa').emit('message', data);
  }

  @SubscribeMessage('getGroup')
  Group(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    console.log(client.id, data);
    const msg = {
      id: client.id + '',
      msg: Array.from(this.server.sockets.adapter.rooms.keys()),
    };
    console.log(this.server.sockets.adapter.socketRooms(client.id));
    client.emit('getGroup', msg);
  }

  @SubscribeMessage('getUserList')
  UserList(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    const msg = {
      id: client.id + '',
      room: data.room,
      msg: Array.from(this.server.sockets.adapter.rooms.get('test').keys()),
    };
    client.emit('getUserList', msg);
  }

  @SubscribeMessage('getUserInfo')
  UserInfo(@MessageBody() data: any, client: Socket) {}

  @SubscribeMessage('joinRoom')
  Join(@MessageBody() data: any, client: Socket) {}

  @SubscribeMessage('leaveRoom')
  Leave(@MessageBody() data: any, client: Socket) {}

  @SubscribeMessage('message')
  Message(@MessageBody() data: any, @ConnectedSocket() client: Socket) {
    // this.server.sockets.sockets.get(client.id).emit('message', data);
    console.log(data);
  }
}
