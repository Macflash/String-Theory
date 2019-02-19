import { Lookup } from "./reducers";
import { Neck } from "../theory/instruments/strings/neck";

export enum SelectionAction {
    Select,
    Toggle,
    Reset,
}

export enum NeckAction {
    SetNewNeck,
}

export interface ISelectionPayload {
    type: SelectionAction;
    tones?: Lookup;
    notes?: Lookup;
    frets?: Lookup;
}

export interface INeckPayload {
    type: NeckAction;
    neck: Neck;
}

export function setNewNeckAction(neck: Neck): INeckPayload {
    return { type: NeckAction.SetNewNeck, neck };
}

export function toneAction(type: SelectionAction, tones?: Lookup): ISelectionPayload {
    return { type, tones };
}

export function noteAction(type: SelectionAction, notes?: Lookup): ISelectionPayload {
    return { type, notes };
}

export function fretAction(type: SelectionAction, frets?: Lookup): ISelectionPayload {
    return { type, frets };
}

export function selectAction(type: SelectionAction, tones?: Lookup, notes?: Lookup, frets?: Lookup): ISelectionPayload {
    return { type, tones, notes, frets };
}

// applies the update, but does not override any existing values
export function softApplyLookup(prevState: Lookup, update?: Lookup){
    if (!update) { return prevState; }

    var newState = { ...prevState };
    for (let key of Object.keys(update)) {
        newState[key] = newState[key] || update[key];
    }

    for (let key of Object.keys(newState)) {
        if (!newState[key]) {
            delete newState[key];
        }
    }

    return newState;

}

export function applyLookup(prevState: Lookup, update?: Lookup): Lookup {
    if (!update) { return prevState; }

    var newState = { ...prevState };
    for (let key of Object.keys(update)) {
        newState[key] = update[key];
    }

    for (let key of Object.keys(newState)) {
        if (!newState[key]) {
            delete newState[key];
        }
    }

    return newState;
}

export function toggleLookup(prevState: Lookup, update?: Lookup): Lookup {
    if (!update) { return prevState; }
    var newState = { ...prevState };

    // check that all the old keys are true
    let isAllTrue = true;
    for(let key of Object.keys(update)){
        if(!prevState[key]){
            isAllTrue = false;
            break;
        }
    }

    if(isAllTrue){
        // remove all the updated keys
        for(let key of Object.keys(update)){
            delete newState[key];
        }
    }
    else{
        // set all the updated keys
        for(let key of Object.keys(update)){
            newState[key] = update[key];
        }
    }

    return newState;
}