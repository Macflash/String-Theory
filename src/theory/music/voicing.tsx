import React from 'react';
import Tone from './tone';
import { Lookup } from '../../redux/reducers';

// VOICING is a SET of NOTES
// CHORD is a list of TONES
export default class Voicing {
    public notes: number[];
    public noteLookup: Lookup;

    constructor(notes: number[]) {
        this.notes = notes;
        this.noteLookup = {} as Lookup;
        for(let note of this.notes){
            this.noteLookup[note] = true;
        }
    }

    public Tones(): Tone[] {
        return this.notes.map(n => new Tone(n));
    }
}