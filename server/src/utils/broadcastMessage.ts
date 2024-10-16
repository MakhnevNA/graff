import WebSocket from 'ws'
import { CustomWebSocket, TWssType } from "../services/websocketServer/types";
import ChatService from '../core/chats/chatService';

export const broadcastMessage = async (wss: TWssType, message: string, chatId: string, update = false) => {
	const messageToSend = JSON.parse(message);

  // Отправляем сообщение всем пользователям в чате
  wss.clients.forEach((client: CustomWebSocket) => {
    if (client.readyState === WebSocket.OPEN && client.chatId === chatId) {
      client.send(JSON.stringify(messageToSend));
    }
  });

  // Если нужно обновить список чатов, получаем актуальные данные и рассылаем
  if (update ) {
    // Получаем обновленный список чатов
    const allChats = await ChatService.getAllChats();

    // Отправляем актуальный список чатов всем клиентам
    wss.clients.forEach((client: CustomWebSocket) => {
      if (client.readyState === WebSocket.OPEN && !chatId && !client.chatId) {
        client.send(JSON.stringify(allChats));
      }
    });
  }
}
