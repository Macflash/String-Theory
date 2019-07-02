import { AnyAction } from "redux";

export type Actions = NoteActions;

export enum NoteActions {
    Hover,
    HoverEnd,
    Select,
    SelectEnd,
    Reset,
    Toggle,
}

export interface INoteAction {
    type: NoteActions;
    notes: number[];
}

export function noteAction(type: NoteActions, notes: number[]): INoteAction {
    return { type, notes };
}