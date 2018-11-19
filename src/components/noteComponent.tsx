import React, { PureComponent } from 'react';
import Note from '../theory/music/note';

export interface INoteProps {
    note: number;
}

export default class NoteComponent extends PureComponent<INoteProps> {
    render() {
        return <div style={{
            border: "2px solid gray",
            borderRadius: "30px",
            textAlign: "center",
            verticalAlign: "middle",
            height: "30px",
            width: "30px",
            cursor: "pointer",
        }}>
            {Note.toString(this.props.note)}
        </div>
    }
}