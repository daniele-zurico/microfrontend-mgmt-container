import {IConfigChannel} from './IConfigChannel';

export const initialState: State = {
    app: {
        configPage: {
            page: '',
            uri: '',
            showHeader: false,
        }
    }
};

export interface State {
    app: AppState;
}

export interface AppState {
    configPage: IConfigChannel;
}
