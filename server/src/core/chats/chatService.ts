import pool from '../../db';
import { readSqlFile } from '../../utils/readSqlFile';

const getAllChatsWithQuery = readSqlFile(
    '../../core/chats/chatRepository/getAllChats.sql',
);
const getChatWithQuery = readSqlFile('../../core/chats/chatRepository/getChat.sql')

class ChatService {

    async getAllChats() {
        const allChats = (await pool.query(getAllChatsWithQuery)).rows;
        return allChats;
    }

	async getChat(chatId: string) {
		const chat = (await pool.query(getChatWithQuery, [chatId])).rows;
        return chat;
	}
}

export default new ChatService();
