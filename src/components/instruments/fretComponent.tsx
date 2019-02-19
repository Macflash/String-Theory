import React, { PureComponent } from 'react';
import Note from '../../theory/music/note';
import { connect } from 'react-redux';
import { IStringTheoryState, Lookup } from '../../redux/reducers';
import { AnyAction, Dispatch } from 'redux';
import { toneAction, SelectionAction, fretAction } from '../../redux/actions';
import Tone from '../../theory/music/tone';
import NoteComponent from '../music/noteComponent';
import Fret from '../../theory/instruments/strings/fret';
import NoteDisplayComponent from '../music/noteComponent';

export interface IFretProps {
    fret: Fret;
    selectedFrets: Lookup;
    selectedNotes: Lookup;
    selectedTones: Lookup;
    selectFret: (fret: Fret) => void;
    deselectFret: (fret: Fret) => void;
}

class FretComponent extends PureComponent<IFretProps> {
    private onClick = () => {
        const selectedFret = this.props.selectedFrets[this.props.fret.toString()];
        if (selectedFret) {
            this.props.deselectFret(this.props.fret);
        }
        else {
            this.props.selectFret(this.props.fret);
        }
    }

    render() {
        let borderBottom = "2px solid gray";
        let backgroundColor = "";
        switch (this.props.fret.fret) {
            case 0:
                borderBottom = "4px solid black";
                break;
            case 3:
            case 5:
            case 7:
            case 9:
            case 15:
            case 17:
                backgroundColor = "#EEE";
                break;
            case 12:
                backgroundColor = "#EEE";
                break;
        }

        const selectedFret = !!this.props.selectedFrets[this.props.fret.toString()];
        const selectedNote = !!this.props.selectedNotes[this.props.fret.toNote().toString()];
        const selectedTone = !!this.props.selectedTones[this.props.fret.toNote().toTone().toString()];

        return <div style={{
            padding: "5px",
            borderBottom,
            backgroundColor,
        }}>
            {this.props.fret.toString()}
            <NoteDisplayComponent
                note={this.props.fret.toNote()}
                onClick={this.onClick}
                selected={selectedFret}
                highlighted={selectedNote || selectedTone}
            />
        </div>
    }
}

const mapStateToProps = (state: IStringTheoryState) => {
    return { selectedTones: state.tones, selectedNotes: state.notes, selectedFrets: state.frets };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        selectFret: (fret: Fret) => dispatch(fretAction(SelectionAction.Select, { [fret.toString()]: true })),
        deselectFret: (fret: Fret) => dispatch(fretAction(SelectionAction.Select, { [fret.toString()]: false })),
    };
}

const ConnectedFret = connect(mapStateToProps, mapDispatchToProps)(FretComponent);

export default ConnectedFret;