import { Logger } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';

@WebSocketGateway(4000, { transports: ['websocket', 'polling'] })
export class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  wss: Server;

  private logger = new Logger('AppGateway'); 


  handleConnection(client: Socket, ...args: any[]) {
    this.logger.log(`Client connected: ${client.id}`);
    client.emit('connection', 'Successfully connected to server');
  }

  handleDisconnect(client) {
    this.logger.log('Client disconnected');
  }
}
