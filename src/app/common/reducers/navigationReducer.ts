import {AppState, State} from '../interfaces/IAppState';
import {RouterAction} from '@ngrx/router-store';
import {IConfigChannel} from '../interfaces/IConfigChannel';

export type UserLoggedIn = { type: 'USER_LOGGED_IN', payload: {configPage: IConfigChannel}  };
export type Page = { type: 'PAGE_LOADED',  payload: IConfigChannel };

type Action = RouterAction<State> | Page | UserLoggedIn;

export function navigationReducer(state: AppState, action: Action): AppState {
    switch (action.type) {
        case 'PAGE_LOADED':
            const page = {...state.configPage, ...action.payload};
            return  {...state, configPage: page };
        default:
            return state;
    }
}
