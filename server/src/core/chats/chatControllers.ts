import ChatService from './chatService';
import { Request, Response } from 'express';

class ChatControllers {
    async getAllChats(req: Request, res: Response): Promise<Response> {
        try {
            const allChats = await ChatService.getAllChats();
            return res.json(allChats);
		} catch (e) {
			console.error(e);
            return res
                .status(500)
                .json({ message: 'Не удалось получить чаты' });
        }
    }

    async getChat(req: Request, res: Response): Promise<Response> {
        try {
			const { chatId } = req.params;

			if (!chatId) {
				return res.status(400).json({ message: 'id не указан' });
			}		
			
            const chat = await ChatService.getChat(chatId);
            return res.json(chat);
		} catch (e) {
			console.error(e);
			return res
				.status(500)
				.json({ message: 'Не удалось получить чат' });
        }
    }
}

export default new ChatControllers();
