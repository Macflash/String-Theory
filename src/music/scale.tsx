import React, { PureComponent } from 'react';
import tone from './tone';
import chord from './chord';
import { Whole as W, Half as h } from './interval';

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

    private static BuildScale(intervals: number[], root: tone, name?: string): scale {
        var tones: tone[] = [];
        let currentTone = root;
        console.log(intervals);
        for (var i = 0; i < intervals.length; i++) {
            tones.push(currentTone);
            currentTone = currentTone.addInterval(intervals[i]);
        }

        console.log(tones);

        return new scale(tones, name);
    }

    public static Major(root: tone): scale {
        return this.BuildScale([W, W, h, W, W, W, h], root, "Major");
    }

    public static Minor(root: tone): scale {
        return this.BuildScale([W, h, W, W, h, W, W], root, "Minor");
    }

    public static Dorian(root: tone): scale {
        return this.BuildScale([W, h, W, W, W, h, W], root, "Dorian");
    }

    public static Phyrgian(root: tone): scale {
        return this.BuildScale([h, W, W, W, h, W, W], root, "Phyrgian");
    }

    public static Lydian(root: tone): scale {
        return this.BuildScale([W, W, W, h, W, W, h], root, "Lydian");
    }

    public static Mixolydian(root: tone): scale {
        return this.BuildScale([W, W, h, W, W, h, W], root, "Mixolydian");
    }

    public static Aeolian(root: tone): scale {
        return this.BuildScale([W, h, W, W, h, W, W], root, "Aeolian");
    }
    public static Locrian(root: tone): scale {
        return this.BuildScale([h, W, W, h, W, W, W], root, "Locrian");
    }
}

export class Scale extends PureComponent<{}> {
    render() {
        var s = scale.Major(new tone(0));
        console.log(s);
        var chords = s.Triads();
        console.log(chords);
        return <div>
            <div>{s.Name()}</div>
            {chords.map((c, i) => <div key={i}>{c.toString()}</div>)}
        </div>;
    }
}