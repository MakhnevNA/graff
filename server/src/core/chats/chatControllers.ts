import ChatService from './chatService';
import { CustomWebSocket, IMessage, MessageType, TWssType } from '../../services/websocketServer/types';
import { broadcastMessage } from '../../utils/broadcastMessage';

class ChatControllers {
	private wss: TWssType;
	private ws: CustomWebSocket;
	
	constructor(wss: TWssType, ws: CustomWebSocket) {
		this.wss = wss;
		this.ws = ws;
	}
	
	async getAllChats() {

		this.ws.on('message', async (message: IMessage) => {

			message = JSON.parse(String(message))
			const allChats = await ChatService.getAllChats()

			switch (message.type) {	
				case MessageType.CONNECTION: {
					this.ws.send(JSON.stringify(allChats))
					break
				}
				case MessageType.MESSAGE: {		
					await broadcastMessage(this.wss, JSON.stringify(allChats), '', true)
					break
				}
			}
		});
    }

	async getChat() {

		this.ws.on('message', async (message: IMessage) => {

			message = JSON.parse(String(message));		
			const { chatId, sender, text } = message;

			this.ws.chatId = chatId

			if (!chatId) {
				const reasonForClosure = JSON.stringify( {type: 'error', text: 'Не указан chatId'})
				this.ws.close(1008, reasonForClosure)
				return
			}

			switch (message.type) {
				case MessageType.MESSAGE: {

					if (!sender || !text) {
						const reasonForClosure = JSON.stringify( {type: 'error', text: 'Не указан sender и/или text'})
						this.ws.close(1008, reasonForClosure)
						return 
					}

					const returnedMessage = await ChatService.sendMessage(chatId, text, sender);
					
					if (returnedMessage?.id) 
						await broadcastMessage(this.wss, JSON.stringify(returnedMessage), chatId);
                    
					break
				}

				case MessageType.CONNECTION: {

					const chat = await ChatService.getChat(chatId);
					this.ws.send(JSON.stringify(chat));

					break
				}
			}
		});

		this.ws.on('close', () => {
			delete this.ws.chatId
		})
	}

}

export default ChatControllers;




