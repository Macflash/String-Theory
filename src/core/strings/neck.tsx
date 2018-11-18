import React from 'react';
import String from './string';
import Note from '../music/note';

export class Neck {
    // The root NOTES of the strings
    private strings: String[];

    // The number of frets on each string
    private frets: number;

    constructor(roots: number[], frets: number){
        this.frets = frets;
        this.strings = roots.map(root => new String(root, frets))
    }
}

export const Guitar = new Neck([
    Note.parse("E2"),
    Note.parse("A2"),
    Note.parse("D3"),
    Note.parse("G3"),
    Note.parse("B3"),
    Note.parse("E4"),
], 22);

export const Bass = new Neck([
    Note.parse("E1"),
    Note.parse("A1"),
    Note.parse("D2"),
    Note.parse("G2"),
], 24);