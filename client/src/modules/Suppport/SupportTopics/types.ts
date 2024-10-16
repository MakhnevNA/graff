import { WebSocketService } from '@/core/services/webSocketService/WebSocketService';
import { IMessages, ITopicsItem } from '@/modules/Suppport/types';

export interface ISupportTopicsCommon {
    connectionForChat: WebSocketService<ITopicsItem>;
    selectedChat: ITopicsItem | undefined;
    getMessageFromWS: (message: ITopicsItem | IMessages) => void;
}

export interface ISupportTopicsProps extends ISupportTopicsCommon {
    allChats: ITopicsItem[] | undefined;
    isLoadingPage: boolean;
}

export interface ISupportTopicsItemProps extends ISupportTopicsCommon {
    chatItem: ITopicsItem;
}
