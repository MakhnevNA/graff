import { WebSocketService } from '@/core/services/webSocketService/WebSocketService';
import { ITopicsItem } from '@/modules/Suppport/types';
import { PROFILE } from '@/shared/constants';

export enum MessageType {
    CONNECTION = 'connection',
    MESSAGE = 'message',
}

export interface IMessage {
    type: MessageType;
    chatId?: string;
    text?: string;
    sender?: PROFILE;
}

export interface ISupportOpenedTopicCommon {
    connectionForChat: WebSocketService<ITopicsItem>;
    selectedChat: ITopicsItem | undefined;
    connectionForAllChats: WebSocketService<ITopicsItem[]>;
}

export interface ISupportOpenedTopicInput extends ISupportOpenedTopicCommon {
    isLoadingPage: boolean;
}

export interface SupportOpenedTopicChatProps {
    isLoadingPage: boolean;
    selectedChat: ITopicsItem;
}
