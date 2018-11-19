import React from 'react';
import Tone from '../../music/tone';

export default class String {
    // The root NOTE of the open string
    private root: number;
    // The number of frets on the string
    private frets: number;

    constructor(root: number, frets: number) {
        this.root = root;
        this.frets = frets;
    }

    public Frets(): number[] {
        var result: number[] = [];

        for (let i = 0; i < this.frets; i++) {
            result.push(i + this.root);
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

        return this.root + fret;
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