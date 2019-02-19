import React from 'react';
import Tone, { sharpNames, flatNames } from './tone';

// NOTE is simply a number
// C0 is defined as 0
// This aligns with standard MIDI notes
export default class Note {
    public note: number;

    constructor(note: number){
        this.note = note;
    }

    public toString(): string {
        return (new Tone(this.note).toString()) + Math.floor(this.note / 12);
    }

    public toTone(): Tone {
        return new Tone(this.note);
    }

    public static parse(input: string): number {
        let tone = -1;
        let names = sharpNames;
        if(input.indexOf("b") >= 0){
            names = flatNames;
        }
        for(let i = 0 ; i < names.length; i++){
            if(input.indexOf(names[i]) == 0){
                tone = i;
            }
        }

        var register = parseInt(input.substring(names[tone].length));
        return tone + (register*12);
    }
}