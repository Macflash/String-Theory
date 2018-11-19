import React, { PureComponent } from 'react';
import NoteComponent from '../noteComponent';

export interface IFretProps {
    fret: number;
    note: number;
}

export default class FretComponent extends PureComponent<IFretProps> {
    render() {
        let borderBottom = "2px solid gray";
        let backgroundColor = "";

        switch (this.props.fret) {
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

        return <div style={{
            padding: "5px",
            borderBottom,
            backgroundColor,
        }}>
            <NoteComponent note={this.props.note} />
        </div>
    }
}