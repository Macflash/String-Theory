import { combineReducers, AnyAction, createStore } from 'redux';
import { NoteActions, INoteAction } from './actions';

export type INoteLookup = { [note: number]: number | boolean | undefined };

export interface IStringTheoryState {
    selectedNotes: INoteLookup;
    //hoveredNotes: INoteLookup;
}

function selectedNotes(state: INoteLookup | undefined, action: AnyAction): INoteLookup {
    if (!state) { return {}; }
    switch (action.type) {
        case NoteActions.Select:
        case NoteActions.SelectEnd:
            let selectState = { ...state } as INoteLookup;
            let selectAction = action as INoteAction;
            for (let note of selectAction.notes) {
                if (selectAction.type == NoteActions.Select) {
                    console.log("adding note " + note);
                    selectState[note] = true;
                }
                else {
                    console.log("deleting note " + note);
                    delete selectState[note];
                }
            }

            console.log(selectState);
            return selectState;
        case NoteActions.Reset:
            return {};
        case NoteActions.Toggle:
            let toggleState = { ...state } as INoteLookup;
            let toggleAction = action as INoteAction;
            let add = false;
            // if all the notes being toggled are enabled, remove them all, otherwise add the remaining ones
            for (let note of toggleAction.notes) {
                if (!state[note]) {
                    add = true;
                    break;
                }
            }

            for (let note of toggleAction.notes) {
                if (add) {
                    toggleState[note] = true;
                }
                else {
                    delete toggleState[note];
                }
            }
            
            return toggleState;
    }

    return state;
}

const appReducers = combineReducers<IStringTheoryState>({
    selectedNotes,
});

export const AppStore = createStore(appReducers);