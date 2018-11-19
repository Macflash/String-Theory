import React, { PureComponent } from 'react';
import NeckComponent from './instruments/neckComponent';
import { Guitar } from '../theory/instruments/neck';
import { ScaleListComponent } from './music/scaleComponent';
import Scale from '../theory/music/scale';

export default class MainComponent extends PureComponent {
    render(){
        return <div style={{display: "flex", flexDirection: "row"}}>
                <NeckComponent neck={Guitar} />
                <ScaleListComponent scales={Scale.BuildAllScales()} />
            </div>;
    }
}