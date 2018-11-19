import React, { PureComponent } from 'react';
import { Neck } from '../../theory/instruments/strings/neck';
import StringComponent from './stringComponent';

export interface INeckProps {
    neck: Neck;
}

export default class NeckComponent extends PureComponent<INeckProps> {
    render() {
        return <div style={{ display: "flex", flexDirection: "row" }}>
            {this.props.neck.strings.map((s, i) =>
                <StringComponent key={i} string={s} />)}
        </div>
    }
}