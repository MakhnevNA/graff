import { Router } from 'express';
import ChatControllers from './chatControllers';

const chatRoutes = Router();

// Возвращает список всех чатов
chatRoutes.get('/list/chats', ChatControllers.getAllChats);

// Возвращает чат
chatRoutes.get('/chat/:chatId', ChatControllers.getChat);

export default chatRoutes;
