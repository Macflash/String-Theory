import React from 'react';
import tone from './tone';
import chord from './chord';
import { Whole, Half } from './interval';

// Scale is a set of TONES
// Scale tones should be ORDERED
// E.G. the 3rd of the scale is the 3rd item in the list
export default class scale {
    private name?: string;
    private tones: tone[];
    constructor(tones: tone[], name?: string) {
        this.tones = tones;
        this.name = name;
    }

    // 0 based index is a little weird for music notation
    // For now simply generate the standard triads
    // TODO: update the names for these chords to be more legible
    public Chords(): chord[] {
        let chords: chord[] = [];
        for (let i = 0; i < scale.length; i++) {
            chords.push(new chord([
                this.tones[i],
                this.tones[(i + 1) % 12],
                this.tones[(i + 2) % 12],
            ], (i + 1).toString()));
        }

        return chords;
    }

    private static BuildScale(intervals: number[], root: tone, name?: string): scale {
        var tones: tone[] = [];
        let currentTone = root;
        for (var i = 0; i < intervals.length; i++) {
            tones.push(currentTone);
            currentTone.addInterval(intervals[i]);
        }

        return new scale(tones, name);
    }

    public static Major(root: tone): scale {
        return this.BuildScale([Whole, Whole, Half, Whole, Whole, Whole, Half ], root, "Major");
    }
}