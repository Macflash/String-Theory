import { AnyAction } from "redux";

export type Actions = NoteActions;

export enum NoteActions {
    Hover,
    HoverEnd,
    Select,
    SelectEnd,
    Reset,
}

export interface INoteAction {
    type: NoteActions;
    note: number;
}

export function noteAction(type: NoteActions, note: number): INoteAction {
    console.log("note action");
    return { type, note };
}