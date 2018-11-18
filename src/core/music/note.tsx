import React from 'react';
import Tone, { sharpNames, flatNames } from './tone';

// NOTE is simply a number
// C0 is defined as 0
// This aligns with standard MIDI notes
export default class Note {
    public static toString(note: number): string {
        return (new Tone(note).toString()) + Math.floor(note / 12);
    }

    public static toTone(note: number): Tone {
        return new Tone(note);
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
        return tone + register;
    }
}