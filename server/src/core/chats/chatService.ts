import pool from '../../db';
import { readSqlFile } from '../../utils/readSqlFile';
import { IChat, IMessage } from './chatModel';

const SQL_PATHS = {
    getAllChats: '../../core/chats/chatRepository/getAllChats.sql',
    getChat: '../../core/chats/chatRepository/getChat.sql',
    sendMessage: '../../core/chats/chatRepository/sendMessage.sql',
};

const getAllChatsWithQuery = readSqlFile( 'chatRepository', SQL_PATHS.getAllChats);
const getChatWithQuery = readSqlFile('chatRepository', SQL_PATHS.getChat);
const sendMessageWithQuery = readSqlFile('chatRepository', SQL_PATHS.sendMessage);

class ChatService {

	async getAllChats() {
		try {
			const allChats: IChat[] = (await pool.query(getAllChatsWithQuery)).rows;
			return allChats;
		} catch (error) {

			if (!(error instanceof Error))
				throw new Error('Неизвестная ошибка при получении всех чатов')
			
			throw new Error(error.message)
		}

    }

	async getChat(chatId: string) {
		try { 
			const chat: IChat= (await pool.query(getChatWithQuery, [chatId])).rows[0];
			return chat
		} catch (error) {
			
			if (!(error instanceof Error)) 
				throw new Error(`Неизвестная ошибка при получении чата ${chatId}`)
		
			throw new Error(error.message)
		}
	}

	async sendMessage(chatId: string, sender: string, text: string) {
		try{
			const message: IMessage = (await pool.query(sendMessageWithQuery, [chatId, sender, text])).rows[0]
			return message
		} catch (error) {

			if (!(error instanceof Error)) 
				throw new Error('Неизвестная ошибка при отправке сообщения')
			
			throw new Error(error.message)
		}
	}
}

export default new ChatService();
