import React, { PureComponent } from 'react';
import Tone from './tone';
import chord from './chord';
import { Whole as W, Half as h } from './interval';

// Scale is a set of TONES
// Scale tones should be ORDERED
// E.G. the 3rd of the scale is the 3rd item in the list
export default class Scale {
    private name?: string;
    private tones: Tone[];
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

    // 0 based index is a little weird for music notation
    // For now simply generate the standard triads
    // TODO: update the names for these chords to be more legible
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
        console.log(intervals);
        for (var i = 0; i < intervals.length; i++) {
            tones.push(currentTone);
            currentTone = currentTone.addInterval(intervals[i]);
        }

        console.log(tones);

        return new Scale(tones, name);
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

    public static Aeolian(root: Tone): Scale {
        return this.BuildScale([W, h, W, W, h, W, W], root, "Aeolian");
    }
    public static Locrian(root: Tone): Scale {
        return this.BuildScale([h, W, W, h, W, W, W], root, "Locrian");
    }
}

export class ScaleComponent extends PureComponent<{}> {
    render() {
        var s = Scale.Mixolydian(new Tone(0));
        var chords = s.Quads();
        return <div>
            <div>{s.Root() + " " + s.Name()}</div>
            {chords.map((c, i) => <div key={i}>{c.toString()}</div>)}
        </div>;
    }
}