import React, { PureComponent } from 'react';
import Chord from '../../theory/music/chord';
import { INoteLookup, IStringTheoryState } from '../../redux/reducers';
import Tone from '../../theory/music/tone';
import { connect } from 'react-redux';
import { Dispatch, AnyAction } from 'redux';
import { noteAction, NoteActions } from '../../redux/actions';

export interface IChordProps {
    chord: Chord;
    selectedNotes: INoteLookup;
    toggleChord: (notes: number[]) => void;
}

class ChordComponent extends PureComponent<IChordProps> {
    private onClick = () => {
        this.props.toggleChord(this.props.chord.tones.map(t => t.note));
    }

    render() {
        const fullMatch = Tone.FullMatch(this.props.chord.tones, this.props.selectedNotes);
        const partialMatch = Tone.PartialMatch(this.props.chord.tones, this.props.selectedNotes);

        return (
            (fullMatch || partialMatch) ?
                <div
                    onClick={this.onClick}
                    style={{
                        cursor: "pointer",
                        color: fullMatch ? "green" : "",
                    }}>
                    {this.props.chord.toString()}
                </div>
                : null);
    }
}

const mapStateToProps = (state: IStringTheoryState) => {
    return { selectedNotes: state.selectedNotes };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        toggleChord: (notes: number[]) => dispatch(noteAction(NoteActions.Toggle, notes)),
    };
}

const ConnectedChord = connect(mapStateToProps, mapDispatchToProps)(ChordComponent);

export default ConnectedChord;

export interface IChordListProps {
    chords: Chord[];
}

export class ChordListComponent extends PureComponent<IChordListProps>{
    render() {
        return <div>
            {this.props.chords.map((chord, i) => <ConnectedChord key={i} chord={chord} />)}
        </div>;
    }
}