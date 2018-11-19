import React, { PureComponent } from 'react';
import NeckComponent from './strings/neckComponent';
import { Guitar } from '../core/strings/neck';

export default class MainComponent extends PureComponent {
    render(){
        return <NeckComponent neck={Guitar} />;
    }
}