import React, { PureComponent } from 'react';
import NeckComponent from './neckComponent';
import { Guitar } from '../core/strings/neck';
import Note from '../core/music/note';

export default class MainComponent extends PureComponent {
    render(){
        console.log(Note.toString(Note.parse("E1")));
        console.log(Note.toString(Note.parse("C0")));
        console.log(Note.toString(Note.parse("D2")));

        return <NeckComponent neck={Guitar} />;
    }
}