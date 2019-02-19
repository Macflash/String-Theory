import React, { PureComponent } from 'react';
import Note from '../../theory/music/note';
import { connect } from 'react-redux';
import { IStringTheoryState, Lookup } from '../../redux/reducers';
import { AnyAction, Dispatch } from 'redux';
import { toneAction, SelectionAction } from '../../redux/actions';
import Tone from '../../theory/music/tone';

/*
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
            <h3>Chords</h3>
            {this.props.chords.map((chord, i) => <ConnectedChord key={i} chord={chord} />)}
        </div>;
    }
}
*/