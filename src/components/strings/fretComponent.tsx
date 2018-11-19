import React, { PureComponent } from 'react';
import NoteComponent from '../noteComponent';

export interface IFretProps {
    note: number;
}

export default class FretComponent extends PureComponent<IFretProps> {
    render() {
        return <div style={{
            padding: "5px",
            borderBottom: "2px solid gray",
        }}>
            <NoteComponent note={this.props.note} />
        </div>
    }
}