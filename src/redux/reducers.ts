export type INoteLookup = {[note: number]: boolean | undefined };

export interface IAppState {
    selectedNotes: INoteLookup;
    hoveredNotes: INoteLookup;
}