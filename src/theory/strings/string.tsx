import React from 'react';

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
}