import { combineReducers, AnyAction, createStore } from 'redux';
import { SelectionAction, ISelectionPayload, applyLookup, NeckAction } from './actions';
import { Neck, Guitar } from '../theory/instruments/strings/neck';

export interface IFretLocation {
    string: number;
    fret: number;
}

//export type Lookup = { [key: string]: number | boolean | undefined };
export interface ICanLookup {
    getKey(): string;
}

export class Lookup {
    [key: string]: number | boolean | undefined;
}

export interface IStringTheoryState {
    notes: Lookup;
    tones: Lookup;
    frets: Lookup;
}

function tones(state: Lookup | undefined, action: AnyAction): Lookup {
    if (!state || action.type == SelectionAction.Reset) { return new Lookup(); }
    if (!action.tones) { return state; }
    return applyLookup(state, action.tones);
}

function notes(state: Lookup | undefined, action: AnyAction): Lookup {
    if (!state || action.type == SelectionAction.Reset) { return new Lookup(); }
    if (!action.notes) { return state; }
    return applyLookup(state, action.notes);
}

function frets(state: Lookup | undefined, action: AnyAction): Lookup {
    if (!state || action.type == SelectionAction.Reset) { return new Lookup(); }
    if (!action.frets) { return state; }
    return applyLookup(state, action.frets);
}

const appReducers = combineReducers<IStringTheoryState>({
    tones,
    notes,
    frets,
});

export const AppStore = createStore(appReducers);