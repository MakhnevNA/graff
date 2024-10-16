import {
    IReasonForClosure,
    WS_ROUTES,
} from '@/core/services/webSocketService/types';
import { IMessage } from '@/modules/Suppport/SupportOpenedTopic/types';
import { ITopicsItem } from '@/modules/Suppport/types';

class WebSocketService<GMessage> {
    private socket: WebSocket | null = null;
    private url: string;
    private _baseUrl: string;

    constructor(url: string) {
        this.url = url;
        this._baseUrl = import.meta.env.VITE_WEBSOCKET_URL!;
    }

    setConnection(
        message: IMessage,
        handleChangeMessage: (message: GMessage) => void,
    ) {
        // Создание сокета
        this.socket = new WebSocket(`${this._baseUrl}${this.url}`);

        // Открытие сокета
        this.socket.onopen = () => {
            if (message.chatId && this.socket?.readyState === WebSocket.OPEN) {
                console.log(
                    `Установлено соединение с чатом ${message.chatId} `,
                );
            } else {
                console.log(`Подключение к списку чатов установлено`);
            }

            this.sendMessage(message);
        };

        // получение сообщения
        this.socket.onmessage = (event) => {
            const jsonMessage: GMessage = JSON.parse(event.data);

            handleChangeMessage(jsonMessage);
        };

        // закрытие сокета
        this.socket.onclose = (event) => {
            if (!event.reason) {
                console.warn('Соединение закрыто без указания причины');
                return;
            }

            const reason: IReasonForClosure = JSON.parse(event.reason);

            if ('type' in reason && 'message' in reason) {
                console[reason.type](reason.message);
            }
        };

        // ошибка сокета
        this.socket.onerror = (event) => {
            const errorMessage = 'Произошла ошибка WebSocket';

            // Проверяем, что event не является экземпляром ErrorEvent
            if (!(event instanceof ErrorEvent)) {
                console.error(`${errorMessage}. Подробности события:`, event);
                return;
            }

            console.error(`${errorMessage}:`, event.message);
            console.error('Имя файла с ошибкой:', event.filename);
            console.error('Номер строки:', event.lineno);
            console.error('Номер столбца:', event.colno);
        };
    }

    sendMessage(message: IMessage) {
        if (this.socket?.readyState === WebSocket.OPEN)
            this.socket?.send(JSON.stringify(message));
    }

    closeConnection(chatId?: string) {
        if (this.socket?.readyState !== WebSocket.OPEN) {
            return;
        }

        const reasonForClosure = {
            type: 'warn',
            message: 'Разорвано соединение со списком чатов',
        };

        if (chatId)
            reasonForClosure.message = `Разорвано соединение с чатом ${chatId}`;

        this.socket?.close(3500, JSON.stringify(reasonForClosure));
    }
}

const connectionForAllChats = new WebSocketService<ITopicsItem[]>(
    WS_ROUTES.allChats,
);
const connectionForChat = new WebSocketService<ITopicsItem>(WS_ROUTES.chat);

export { WebSocketService, connectionForAllChats, connectionForChat };
