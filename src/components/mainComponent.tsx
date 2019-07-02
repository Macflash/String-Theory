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
        return <div style={{ display: "flex", flexDirection: "row", overflow: "auto", width: "100%", height: "100%", position: "absolute" }}>
            <ToneListComponent />
            <NeckComponent neck={this.neck} />

            <div style={{ flex: "auto", display: "flex", flexDirection: "column" }}>
                <div style={{ flex: "none", flexDirection: "row", display: "flex" }}>
                    <h3 style={{ flex: "none" }}>Search</h3>
                    <input type="text" style={{ flex: "auto", margin: "15px" }} />
                </div>
                <ChordListComponent chords={this.chords} />
                <ScaleListComponent scales={this.scales} />
                <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "auto" }}>
                    <h3 style={{ flex: "none" }}>Frettings</h3>
                    <div style={{ flex: "auto", overflow: "auto" }}>
                        {this.frettings.map((f, i) => <div key={i}>{f.frets.map(n => n == -1 ? "x" : n).join(",")}</div>)}
                    </div>
                </div>
            </div>
        </div>;
    }
}