import React from 'react';
import tone from './tone';

// NOTE is simply a number
// C0 is defined as 0
// This aligns with standard MIDI notes
export default class Note {
    public static toString(note: number): string {
        return (new tone(note).toString()) + Math.floor(note / 12);
    }

    public static toTone(note: number): tone {
        return new tone(note);
    }
}