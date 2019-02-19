import React from 'react';
import Tone, { sharpNames, flatNames } from '../../music/tone';
import Note from '../../music/note';
import String from './string';

// NOTE is simply a number
// C0 is defined as 0
// This aligns with standard MIDI notes
export default class Fret {
    public string: String;
    public fret: number;

    constructor(string: String, fret: number){
        this.string = string;
        this.fret = fret;
    }

    public toString(): string {
        return this.string.toString() + "," + this.fret;
    }

    public toNote(): Note {
        return new Note(this.string.root.note + this.fret);
    }
}