import React from 'react';
import String from './string';
import Note from '../../music/note';
import Instrument from '../instrument';
import Chord from '../../music/chord';
import Voicing from '../../music/voicing';
import Fretting from './fretting';
import Tone from '../../music/tone';

export class Neck implements Instrument {
    // The root NOTES of the strings
    public strings: String[];

    // The number of frets on each string
    private frets: number;

    // Max spread between notes when creating a voicing
    private maxSpread: number;

    constructor(roots: number[], frets: number, maxSpread = 5) {
        this.frets = frets;
        this.strings = roots.map((root, i) => new String(i, new Note(root), frets));
        this.maxSpread = maxSpread;
    }

    // TODO: should voicings be a distinct SET or should they be simply a list?
    convertToVoicing(fretting: Fretting): Voicing {
        let notes = [] as number[];
        for (let i = 0; i < this.strings.length; i++) {
            let note = this.strings[i].getNote(fretting.frets[i]);
            if (note != null) {
                notes.push(note);
            }
        }

        return new Voicing(notes);
    }

    GenerateFrettings(chord: Chord): Fretting[] {

        // we want to ensure each FRETTING covers ALLL chord tones
        // for each chord tone, get all locations on the neck where it is available?

        // get all tones on all strings

        var firstString = this.strings[0].getFrets(chord.tones);
        let currentFrettings: number[][] = firstString.map(s => [s]);
        for (let i = 1; i < this.strings.length; i++) {
            let currentOptions = this.strings[i].getFrets(chord.tones);

            // for the first one we need to like, convert the single array into an array of one item arrays
            var newFrettings: number[][] = [];
            for (let fretting of currentFrettings) {
                let c = this.cross(fretting, currentOptions);
                newFrettings = newFrettings.concat(c);
            }

            currentFrettings = newFrettings;
        }

        // combine them every possible way (s x f)
        console.log("intial frettings: " + currentFrettings.length);

        // prune to get the valid ones that cover all tones
        var frettings = currentFrettings.map(c => new Fretting(c));

        var valid = frettings.filter(f => {
            let voicing = this.convertToVoicing(f);

            // use Full match requirement for the chord (e.g. all tones must be included)
            var valid = Tone.FullMatch(chord.tones, voicing.noteLookup);
            return valid;
        })

        console.log("valid frettings: " + valid.length);

        return valid;
    }

    cross(precursor: number[], newOptions: number[]): number[][] {
        var cross = [] as number[][];

        // MAX spread is across ALL non-0 or -1 frets
        var fretMin = 100;
        var fretMax = -100;
        for (let fret of precursor) {
            if (fret > 0) {
                if (fret > fretMax) { fretMax = fret; }
                if (fret < fretMin) { fretMin = fret; }
            }
        }

        // create the outer bounds of the fretting shape
        var spreadMin = fretMax - this.maxSpread;
        var spreadMax = fretMin + this.maxSpread;

        // append each one of the new options to the prefix portion in turn
        for (let option of newOptions) {
            if (option <= 0 || (option >= spreadMin && option <= spreadMax)) {
                cross.push([...precursor, option]);
            }
        }

        return cross;
    }

    GenerateVoicings(chord: Chord): Voicing[] {
        var voicings = [] as Voicing[];

        // chord has a set of TONES
        // for each string get a set of 

        return voicings;
    }

    GenerateAllVoicings(): Voicing[] {
        throw "this might be a bad idea?";
    }
}

export const Guitar = new Neck([
    Note.parse("E2"),
    Note.parse("A2"),
    Note.parse("D3"),
    Note.parse("G3"),
    Note.parse("B3"),
    Note.parse("E4"),
], 15, 6);

export const Bass = new Neck([
    Note.parse("E1"),
    Note.parse("A1"),
    Note.parse("D2"),
    Note.parse("G2"),
], 24, 4);