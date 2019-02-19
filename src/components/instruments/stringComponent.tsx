import React, { PureComponent } from 'react';
import String from '../../theory/instruments/strings/string';
import FretComponent from './fretComponent';
import ConnectedFret from './fretComponent';

export interface IStringProps {
    string: String;
}

export default class StringComponent extends PureComponent<IStringProps> {
    render() {
        return <div style={{ display: "flex", flexDirection: "column" }}>
            {this.props.string.Frets().map((f, i) =>
                <ConnectedFret key={i} fret={f} />
            )}
        </div>
    }
}