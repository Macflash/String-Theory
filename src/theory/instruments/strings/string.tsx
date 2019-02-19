import React from 'react';
import Tone from '../../music/tone';
import Note from '../../music/note';
import Fret from './fret';

export default class String {
    // The root NOTE of the open string
    public root: Note;

    // index of the string in the instrument
    public stringIndex: number;

    // The number of frets on the string
    private frets: number;

    constructor(stringIndex: number, root: Note, frets: number) {
        this.stringIndex = stringIndex;
        this.root = root;
        this.frets = frets;
    }

    public toString(): string {
        return this.stringIndex + ":" + this.root.toString();
    }

    public Frets(): Fret[] {
        var result: Fret[] = [];

        for (let i = 0; i < this.frets; i++) {
            result.push(new Fret(this, i));
        }

        return result;
    }

    public getNote(fret: number): number | null {
        if (fret > this.frets || fret < -1) {
            throw "not a valid fret!";
        }

        if (fret == -1) {
            return null;
        }

        return this.root.note + fret;
    }

    public getFrets(tones: Tone[]): number[] {
        let frets = [ -1 ] as number[]; // add -1 just so we have that as an option?
        for (let i = 0; i < this.frets; i++) {
            for(let tone of tones){
                if(tone.matchNote(this.getNote(i))){
                    // only need to record the fret once
                    // even if it matched... multiple tones? (this should never happen...)
                    frets.push(i);
                    break;
                }
            }
        }

        return frets;
    }
}