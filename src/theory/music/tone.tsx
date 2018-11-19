import React from 'react';
import { INoteLookup } from '../../redux/reducers';

export const sharpNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export const flatNames =  ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export default class Tone {
    public note: number;
    constructor (note: number){
        this.note = note % 12;
    }

    public addInterval(interval: number): Tone {
        return new Tone(this.note + interval);
    }

    public static Parse(name: string): Tone {
        throw "todo";
    }

    public toString(flat?: boolean){
        const names = flat ? flatNames : sharpNames;
        return names[this.note];
    }

    public static isMatch(tones: Tone[], selectedNotes: INoteLookup): boolean {
        // two conditions:
        // ALL notes in the scale or chord match, always returns true
        let allTonesMatch = true;
        let selectedTones: {[tone: number]: boolean} = {};
        for(let note of Object.keys(selectedNotes)){
            selectedTones[parseInt(note) % 12] = true;
        }

        // check if ALL tones match
        for(let tone of tones){
            if(!selectedTones[tone.note]){
                allTonesMatch = false;
            }
        }

        if(allTonesMatch){ return true; }

        // ALL selected notes BELONG to the scale or chord
        var toneNotes = tones.map(t => t.note.toString());
        for(let tone of Object.keys(selectedTones)){
            if(toneNotes.indexOf(tone) < 0){
                return false;
            }
        }

        return true;
    }
}