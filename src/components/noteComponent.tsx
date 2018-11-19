import React, { PureComponent } from 'react';
import Note from '../theory/music/note';
import { connect } from 'react-redux';
import { IStringTheoryState, INoteLookup } from '../redux/reducers';
import { AnyAction, Dispatch } from 'redux';
import { noteAction, NoteActions } from '../redux/actions';

export interface INoteProps {
    note: number;
    selectedNotes: INoteLookup;
    selectNote: (note: number) => void;
    deselectNote: (note: number) => void;
}

class NoteComponent extends PureComponent<INoteProps> {
    private onClick = () => {
        const selected = this.props.selectedNotes[this.props.note];
        if(selected){
            this.props.deselectNote(this.props.note);
        }
        else{
            this.props.selectNote(this.props.note);
        }
    }

    render() {
        const selected = this.props.selectedNotes[this.props.note];

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
                backgroundColor: selected ? "green" : "",
            }}>
            <span style={{ textAlign: "center" }}>{Note.toString(this.props.note)}</span>
        </div>
    }
}

const mapStateToProps = (state: IStringTheoryState) => {
    return { selectedNotes: state.selectedNotes };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        selectNote: (note: number) => dispatch(noteAction(NoteActions.Select, note)),
        deselectNote: (note: number) => dispatch(noteAction(NoteActions.SelectEnd, note)),
    };
}

const ConnectedNote = connect(mapStateToProps, mapDispatchToProps)(NoteComponent);

export default ConnectedNote;