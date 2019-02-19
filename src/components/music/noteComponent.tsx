import React, { PureComponent } from 'react';
import { Lookup, IStringTheoryState } from '../../redux/reducers';
import Note from '../../theory/music/note';
import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import { noteAction, SelectionAction } from '../../redux/actions';

export interface INoteProps {
    note: Note;
    selectedNotes: Lookup;
    selectedTones: Lookup;
    selectNote: (note: Note) => void;
    deselectNote: (note: Note) => void;
}

export default class NoteDisplayComponent extends PureComponent<{note: Note, onClick: ()=> void, selected: boolean, highlighted: boolean}>{
    render() {
        return <div
            onClick={this.props.onClick}
            style={{
                border: "2px solid gray",
                borderRadius: "30px",
                textAlign: "center",
                padding: "10px 5px",
                fontSize: "15px",
                width: "30px",
                cursor: "pointer",
                backgroundColor: this.props.selected ? "green" : (this.props.highlighted ? "lightblue" : ""),
            }}>
            <span style={{ textAlign: "center" }}>{this.props.note.toString()}</span>
        </div>
    }
}

export class NoteComponent extends PureComponent<INoteProps> {
    private onClick = () => {
        const selectedNote = this.props.selectedNotes[this.props.note.toString()];
        if (selectedNote) {
            this.props.deselectNote(this.props.note);
        }
        else {
            this.props.selectNote(this.props.note);
        }
    }

    render() {
        const selectedNote = this.props.selectedNotes[this.props.note.toString()];
        const selectedTone = this.props.selectedNotes[this.props.note.toTone().toString()];
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
                backgroundColor: selectedNote ? "green" : (selectedTone ? "lightblue" : ""),
            }}>
            <span style={{ textAlign: "center" }}>{this.props.note.toString()}</span>
        </div>
    }
}

const mapStateToProps = (state: IStringTheoryState) => {
    return { notes: state.notes, tones: state.tones };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        selectTone: (note: Note) => dispatch(noteAction(SelectionAction.Select, {[note.toString()]: true})),
        deselectTone: (note: Note) => dispatch(noteAction(SelectionAction.Select, {[note.toString()]: false})),
    };
}

export const ConnectedNote = connect(mapStateToProps, mapDispatchToProps)(NoteComponent);