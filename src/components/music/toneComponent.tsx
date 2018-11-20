import React, { PureComponent } from 'react';
import Note from '../../theory/music/note';
import { connect } from 'react-redux';
import { IStringTheoryState, INoteLookup } from '../../redux/reducers';
import { AnyAction, Dispatch } from 'redux';
import { noteAction, NoteActions } from '../../redux/actions';
import Tone from '../../theory/music/tone';

export interface IToneProps {
    tone: Tone;
    selectedNotes: INoteLookup;
    selectTone: (note: number) => void;
    deselectTone: (note: number) => void;
}

class ToneComponent extends PureComponent<IToneProps> {
    private onClick = () => {
        const selectedTone = this.props.selectedNotes[this.props.tone.note];
        if (selectedTone) {
            this.props.deselectTone(this.props.tone.note);
        }
        else {
            this.props.selectTone(this.props.tone.note);
        }
    }

    render() {
        const selectedTone = this.props.selectedNotes[this.props.tone.note];
        return <div
            onClick={this.onClick}
            style={{
                border: "2px solid gray",
                borderRadius: "30px",
                textAlign: "center",
                padding: "10px 5px",
                fontSize: "15px",
                width: "30px",
                cursor: "pointer",
                backgroundColor: selectedTone ? "lightblue" : "",
            }}>
            <span style={{ textAlign: "center" }}>{this.props.tone.toString()}</span>
        </div>
    }
}

const mapStateToProps = (state: IStringTheoryState) => {
    return { selectedNotes: state.selectedNotes };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        selectTone: (note: number) => dispatch(noteAction(NoteActions.Select, [note])),
        deselectTone: (note: number) => dispatch(noteAction(NoteActions.SelectEnd, [note])),
    };
}

const ConnectedTone = connect(mapStateToProps, mapDispatchToProps)(ToneComponent);

export default ConnectedTone;


export class ToneListComponent extends PureComponent {
    private tones: Tone[];
    constructor(props: never) {
        super(props);
        this.tones = [];
        for (let i = 0; i < 12; i++) {
            this.tones.push(new Tone(i));
        }
    }

    render() {
        return <div>
            <h3>Tones</h3>
            {this.tones.map((tone, i) => <ConnectedTone key={i} tone={tone} />)}
        </div>;
    }
}