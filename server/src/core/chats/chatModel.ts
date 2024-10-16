import { MessageType, PROFILE } from "../../shared/types";

export interface IMessage {
    id: string;
    sender: PROFILE;
    text: string;
}

export interface IClientName {
    name: string;
    surname: string;
}

export interface IChat {
    id: string;
    client: IClientName;
	messages: IMessage[];
	type: MessageType
}