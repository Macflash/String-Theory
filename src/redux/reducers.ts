import {combineReducers, AnyAction, createStore} from 'redux';

export type INoteLookup = {[note: number]: boolean | undefined };

export interface IStringTheoryState {
    selectedNotes: INoteLookup;
    //hoveredNotes: INoteLookup;
}


function selectedNotes(state: INoteLookup | undefined, action: AnyAction): INoteLookup {
    return {};
}

const appReducers = combineReducers<IStringTheoryState>({
    selectedNotes,
});

export const AppStore = createStore(appReducers);