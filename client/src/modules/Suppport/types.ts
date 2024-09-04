import { PROFILE } from '@/shared/constants';

export interface IMessages {
    id: string;
    sender: PROFILE;
    text: string;
}
export interface IClientName {
    name: string;
    surname: string;
}
export interface ITopicsItem {
    id: string;
    client: IClientName;
    messages: IMessages[];
}
