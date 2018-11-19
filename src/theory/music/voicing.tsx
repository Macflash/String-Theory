import React from 'react';
import Tone from './tone';
import { INoteLookup } from '../../redux/reducers';

export default class Voicing {
    public notes: number[];
    public noteLookup: INoteLookup;

    constructor(notes: number[]) {
        // TODO: de-dupe and sort this (add a look up too)
        this.notes = notes;
        this.noteLookup = {} as INoteLookup;
        for(let note of this.notes){
            this.noteLookup[note] = true;
        }
    }

    public Tones(): Tone[] {
        return this.notes.map(n => new Tone(n));
    }
}