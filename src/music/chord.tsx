import React from 'react';
import tone from './tone';
import { MajorThird, Fifth, MinorThird } from './interval';

// Chords are a set of TONES
// The first TONE is considered the root
export default class chord {
    private name?: string;
    private tones: tone[];

    constructor(tones: tone[], name?: string){
        this.tones = tones;
        this.name = name;
    }

    public toString(flat?: boolean): string {
        return this.name + ": " + this.tones.map(t => t.toString(flat)).join(",");
    }

    public static Major(root: tone): chord {
        return new chord([root, root.addInterval(MajorThird), root.addInterval(Fifth)], "Maj");
    }

    public static Minor(root: tone): chord {
        return new chord([root, root.addInterval(MinorThird), root.addInterval(Fifth)], "Min");
    }
}