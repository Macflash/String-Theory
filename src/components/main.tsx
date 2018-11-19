import React, { PureComponent } from 'react';
import NeckComponent from './instruments/neckComponent';
import { Guitar } from '../theory/instruments/neck';
import { ScaleListComponent } from './music/scaleComponent';
import Scale from '../theory/music/scale';
import Chord from '../theory/music/chord';
import { ChordListComponent } from './music/chordComponent';

export default class MainComponent extends PureComponent {
    private scales: Scale[];
    private chords: Chord[];

    constructor(props:any){
        super(props);
        this.scales = Scale.BuildAllScales();
        this.chords = Chord.BuildAllChords();
    }
    render(){
        return <div style={{display: "flex", flexDirection: "row"}}>
                <NeckComponent neck={Guitar} />
                <ScaleListComponent scales={this.scales} />
                <ChordListComponent chords={this.chords} />
            </div>;
    }
}