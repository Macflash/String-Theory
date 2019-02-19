import React, { PureComponent } from 'react';
import Tone from './tone';
import chord from './chord';
import { Whole as W, Half as h } from './interval';
import { Lookup } from '../../redux/reducers';

// Scale is a set of TONES
// Scale tones should be ORDERED
// E.G. the 3rd of the scale is the 3rd item in the list
export default class Scale {
    private name?: string;
    public tones: Tone[];
    constructor(tones: Tone[], name?: string) {
        this.tones = tones;
        this.name = name;
    }

    public Root(): string | undefined {
        return this.tones[0].toString();
    }

    public Name(): string | undefined {
        return this.name;
    }

    public toString(flat?: boolean){
        return this.name + ": " + this.tones.map(tone => tone.toString()).join(",");
    }

    public Triads(): chord[] {
        let chords: chord[] = [];
        for (let i = 0; i < this.tones.length; i++) {
            chords.push(new chord([
                this.tones[i],
                this.tones[(i + 2) % this.tones.length],
                this.tones[(i + 4) % this.tones.length],
            ], (i + 1).toString()));
        }

        return chords;
    }

    public Quads(): chord[] {
        let chords: chord[] = [];
        for (let i = 0; i < this.tones.length; i++) {
            chords.push(new chord([
                this.tones[i],
                this.tones[(i + 2) % this.tones.length],
                this.tones[(i + 4) % this.tones.length],
                this.tones[(i + 6) % this.tones.length],
            ], (i + 1).toString()));
        }

        return chords;
    }

    private static BuildScale(intervals: number[], root: Tone, name?: string): Scale {
        var tones: Tone[] = [];
        let currentTone = root;
        for (var i = 0; i < intervals.length; i++) {
            tones.push(currentTone);
            currentTone = currentTone.addInterval(intervals[i]);
        }

        return new Scale(tones, tones[0] + " " + name);
    }

    public static Major(root: Tone): Scale {
        return this.BuildScale([W, W, h, W, W, W, h], root, "Major");
    }

    public static Minor(root: Tone): Scale {
        return this.BuildScale([W, h, W, W, h, W, W], root, "Minor");
    }

    public static Dorian(root: Tone): Scale {
        return this.BuildScale([W, h, W, W, W, h, W], root, "Dorian");
    }

    public static Phyrgian(root: Tone): Scale {
        return this.BuildScale([h, W, W, W, h, W, W], root, "Phyrgian");
    }

    public static Lydian(root: Tone): Scale {
        return this.BuildScale([W, W, W, h, W, W, h], root, "Lydian");
    }

    public static Mixolydian(root: Tone): Scale {
        return this.BuildScale([W, W, h, W, W, h, W], root, "Mixolydian");
    }
    
    public static Locrian(root: Tone): Scale {
        return this.BuildScale([h, W, W, h, W, W, W], root, "Locrian");
    }

    public static BuildAllScales(): Scale[] {
        var scales: Scale[] = [];

        for(var i = 0; i < 12; i++){
            const tone = new Tone(i);
            scales.push(Scale.Major(tone));
            scales.push(Scale.Minor(tone));
            scales.push(Scale.Dorian(tone));
            scales.push(Scale.Phyrgian(tone));
            scales.push(Scale.Lydian(tone));
            scales.push(Scale.Mixolydian(tone));
            scales.push(Scale.Locrian(tone));
        }

        return scales;
    }
}