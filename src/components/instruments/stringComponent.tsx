import React, { PureComponent } from 'react';
import String from '../../theory/instruments/strings/string';
import FretComponent from './fretComponent';

export interface IStringProps {
    string: String;
}

export default class StringComponent extends PureComponent<IStringProps> {
    render() {
        return <div style={{ display: "flex", flexDirection: "column" }}>
            {this.props.string.Frets().map((n, i) =>
                <FretComponent key={i} note={n} fret={i} />
            )}
        </div>
    }
}