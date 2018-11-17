import React from 'react';

export const sharpNames = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
export const flatNames =  ["C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B"];

export default class tone {
    private note: number;
    constructor (note: number){
        this.note = note % 12;
    }

    public addInterval(interval: number): tone {
        return new tone(this.note + interval);
    }

    public static Parse(name: string): tone {
        throw "todo";
    }

    public toString(flat?: boolean){
        const names = flat ? flatNames : sharpNames;
        return names[this.note];
    }
}