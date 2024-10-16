export enum WS_ROUTES {
    chat = '/chat',
    allChats = '/list/chats',
}

export type TReasonTypeForClosure = 'log' | 'error' | 'warn' | 'info';

export interface IReasonForClosure {
    type: TReasonTypeForClosure;
    message: string;
}
