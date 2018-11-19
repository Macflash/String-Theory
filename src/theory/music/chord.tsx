import React from 'react';
import Tone from './tone';
import { MajorThird, Fifth, MinorThird } from './interval';

// Chords are a set of TONES
// The first TONE is considered the root
// For other tones, should be "3rd"-type, followed by "5th"-type and then any extensions or additional notes after that
export default class Chord {
    private name?: string;
    private tones: Tone[];

    constructor(tones: Tone[], name?: string){
        this.tones = tones;
        this.name = name;
    }

    public toString(flat?: boolean): string {
        return this.name + ": " + this.tones.map(t => t.toString(flat)).join(",");
    }

    public static Major(root: Tone): Chord {
        return new Chord([root, root.addInterval(MajorThird), root.addInterval(Fifth)], "Maj");
    }

    public static Minor(root: Tone): Chord {
        return new Chord([root, root.addInterval(MinorThird), root.addInterval(Fifth)], "Min");
    }
}