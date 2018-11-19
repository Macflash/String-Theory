import {combineReducers, AnyAction, createStore} from 'redux';
import { INoteAction, NoteActions } from './actions';

export type INoteLookup = {[note: number]: boolean | undefined };

export interface IStringTheoryState {
    selectedNotes: INoteLookup;
    //hoveredNotes: INoteLookup;
}

function selectedNotes(state: INoteLookup | undefined, action: AnyAction): INoteLookup {
    switch(action.type){
        case NoteActions.Select:
            let newState = {...state} as INoteLookup;
            newState[action.note] = true;
            return newState;
        case NoteActions.SelectEnd:
            let newState2 = {...state} as INoteLookup;
            delete newState2[action.note];
            return newState2;
    }

    return state || {};
}

const appReducers = combineReducers<IStringTheoryState>({
    selectedNotes,
});

export const AppStore = createStore(appReducers);