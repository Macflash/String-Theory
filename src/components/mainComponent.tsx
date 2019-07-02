import React, { PureComponent } from 'react';
import NeckComponent from './instruments/neckComponent';
import { Guitar } from '../theory/instruments/strings/neck';
import { ScaleListComponent } from './music/scaleComponent';
import Scale from '../theory/music/scale';
import Chord from '../theory/music/chord';
import { ChordListComponent } from './music/chordComponent';
import Tone from '../theory/music/tone';
import Voicing from '../theory/music/voicing';
import Fretting from '../theory/instruments/strings/fretting';
import { ToneListComponent } from './music/toneComponent';

export default class MainComponent extends PureComponent {
    private scales: Scale[];
    private chords: Chord[];
    private neck = Guitar;
    private frettings: Fretting[];

    constructor(props: any) {
        super(props);
        this.scales = Scale.BuildAllScales();
        this.chords = Chord.BuildAllChords();
        this.frettings = this.neck.GenerateFrettings(Chord.Major(new Tone(0)));
    }
    render() {
        return <div style={{ display: "flex", flexDirection: "row" }}>
            <ToneListComponent />
            <NeckComponent neck={this.neck} />
            <ChordListComponent chords={this.chords} />
            <ScaleListComponent scales={this.scales} />
            <div>
                {this.frettings.map((f, i) => <div key={i}>{f.frets.map(n => n == -1 ? "x" : n).join(",")}</div>)}
            </div>
        </div>;
    }
}