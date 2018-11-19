import React, { PureComponent } from 'react';
import NeckComponent from './instruments/neckComponent';
import { Guitar } from '../theory/instruments/neck';

export default class MainComponent extends PureComponent {
    render(){
        return <NeckComponent neck={Guitar} />;
    }
}