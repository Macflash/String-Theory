import React, { PureComponent } from 'react';
import Chord from '../../theory/music/chord';

export interface IChordProps {
    chord: Chord;
}

export default class ChordComponent extends PureComponent<IChordProps> {
    render() {
        return <div>
            {this.props.chord.toString()}
        </div>
    }
}

export interface IChordListProps {
    chords: Chord[];
}

export class ChordListComponent extends PureComponent<IChordListProps>{
    render() {
        return <div>
            {this.props.chords.map((chord, i) => <ChordComponent key={i} chord={chord} />)}
        </div>;
    }
}