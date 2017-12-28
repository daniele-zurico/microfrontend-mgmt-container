/**
 * type of messages that can be dispatched/listened
 */
export enum MessageType {
    USER_TOKEN = 'USER_TOKEN',
    USER_TOKEN_REQ = 'USER_TOKEN_REQ',
    USER_TOKEN_RES = 'USER_TOKEN_RES',
    PAGE_LOADED = 'PAGE_LOADED'
}


/**
 * message that can be dispatched/listened
 */
export interface IMessage {
    type: MessageType;
    data: IMessageData;
}

/**
 * message data
 */
export interface IMessageData {
    userToken?: string;
    showHeader?: boolean;
    page?: string;
    uri?: string;
}
