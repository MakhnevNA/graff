import { IncomingMessage } from 'http';
import ws, { WebSocket } from 'ws';

export interface CustomWebSocket extends WebSocket {
	chatId?: string; 
}

export type TWssType = ws.Server<typeof ws, typeof IncomingMessage>

export enum MessageType {
    CONNECTION = 'connection',
    MESSAGE = 'message',
}

export interface IMessage {
	type: MessageType,
	chatId?: string,
	text?: string,
	sender?: string 
}

export enum WS_ROUTES {
	chat = '/chat',
	allChats = '/list/chats'
}

export type TReasonTypeForClosure = 'log' | 'error' | 'warn' | 'info';

export interface IReasonForClosure {
    type: TReasonTypeForClosure;
    message: string;
}
