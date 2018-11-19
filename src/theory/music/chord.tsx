import React from 'react';
import Tone from './tone';
import { MajorThird, Fifth, MinorThird, MajorSecond, Fourth, DiminishedFifth, MajorSeventh, MinorSeventh } from './interval';

// Chords are a set of TONES
// The first TONE is considered the root
// For other tones, should be "3rd"-type, followed by "5th"-type and then any extensions or additional notes after that
export default class Chord {
    private name?: string;
    public tones: Tone[];

    constructor(tones: Tone[], name?: string) {
        this.tones = tones;
        this.name = name;
    }

    public toString(flat?: boolean): string {
        return this.tones[0].toString() + " " + this.name + ": " + this.tones.map(t => t.toString(flat)).join(",");
    }

    // Basic triads 
    public static Major(root: Tone): Chord {
        return new Chord([root, root.addInterval(MajorThird), root.addInterval(Fifth)], "Maj");
    }

    public static Minor(root: Tone): Chord {
        return new Chord([root, root.addInterval(MinorThird), root.addInterval(Fifth)], "Min");
    }
    
    public static Diminished(root: Tone): Chord {
        return new Chord([root, root.addInterval(MinorThird), root.addInterval(DiminishedFifth)], "Dim");
    }

    // Suspended chords
    public static SuspendedSecond(root: Tone): Chord {
        return new Chord([root, root.addInterval(MajorSecond), root.addInterval(Fifth)], "Sus2");
    }
    
    public static SuspendedFourth(root: Tone): Chord {
        return new Chord([root, root.addInterval(Fourth), root.addInterval(Fifth)], "Sus4");
    }

    // Basic Four Note chords
    public static MajorSeventh(root: Tone): Chord {
        return new Chord([root, root.addInterval(MajorThird), root.addInterval(Fifth), root.addInterval(MajorSeventh)], "Maj7");
    }

    public static MinorSeventh(root: Tone): Chord {
        return new Chord([root, root.addInterval(MinorThird), root.addInterval(Fifth), root.addInterval(MinorSeventh)], "Min7");
    }
    
    public static DominantSeventh(root: Tone): Chord {
        return new Chord([root, root.addInterval(MajorThird), root.addInterval(Fifth), root.addInterval(MinorSeventh)], "Dom7");
    }
    
    public static MajorMinorSeventh(root: Tone): Chord {
        return new Chord([root, root.addInterval(MinorThird), root.addInterval(Fifth), root.addInterval(MajorSeventh)], "Mm7");
    }

    public static BuildAllChords(): Chord[] {
        let chords: Chord[] = [];

        for (let i = 0; i < 12; i++) {
            const tone = new Tone(i);
            chords.push(Chord.Major(tone));
            chords.push(Chord.Minor(tone));

            chords.push(Chord.Diminished(tone));
            chords.push(Chord.SuspendedSecond(tone));
            chords.push(Chord.SuspendedFourth(tone));
            
            chords.push(Chord.MajorSeventh(tone));
            chords.push(Chord.MinorSeventh(tone));
            chords.push(Chord.DominantSeventh(tone));
            chords.push(Chord.MajorMinorSeventh(tone));
        }

        return chords;
    }
}