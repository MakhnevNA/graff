import { ITopicsItem } from '@/modules/Suppport/types';

export type TMessageSize = 'big' | 'small';

export interface IMessageProps {
    selectedChat: ITopicsItem;
    messageSize?: TMessageSize;
}
