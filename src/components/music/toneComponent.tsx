import React, { PureComponent } from 'react';
import Note from '../../theory/music/note';
import { connect } from 'react-redux';
import { IStringTheoryState, Lookup } from '../../redux/reducers';
import { AnyAction, Dispatch } from 'redux';
import { toneAction, SelectionAction } from '../../redux/actions';
import Tone from '../../theory/music/tone';

export interface IToneProps {
    tone: Tone;
    selectedTones: Lookup;
    selectTone: (tone: Tone) => void;
    deselectTone: (tone: Tone) => void;
}

class ToneComponent extends PureComponent<IToneProps> {
    private onClick = () => {
        const selectedTone = this.props.selectedTones[this.props.tone.toString()];
        if (selectedTone) {
            this.props.deselectTone(this.props.tone);
        }
        else {
            this.props.selectTone(this.props.tone);
        }
    }

    render() {
        const selectedTone = this.props.selectedTones[this.props.tone.toString()];
        return <div
            onClick={this.onClick}
            style={{
                border: "2px solid gray",
                borderRadius: "30px",
                textAlign: "center",
                padding: "10px 5px",
                fontSize: "15px",
                width: "30px",
                cursor: "pointer",
                backgroundColor: selectedTone ? "lightblue" : "",
            }}>
            <span style={{ textAlign: "center" }}>{this.props.tone.toString()}</span>
        </div>
    }
}

const mapStateToProps = (state: IStringTheoryState) => {
    return { selectedTones: state.tones };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        selectTone: (tone: Tone) => dispatch(toneAction(SelectionAction.Select, {[tone.toString()]: true})),
        deselectTone: (tone: Tone) => dispatch(toneAction(SelectionAction.Select, {[tone.toString()]: false})),
    };
}

const ConnectedTone = connect(mapStateToProps, mapDispatchToProps)(ToneComponent);

export default ConnectedTone;


export class ToneListComponent extends PureComponent {
    private tones: Tone[];
    constructor(props: never) {
        super(props);
        this.tones = [];
        for (let i = 0; i < 12; i++) {
            this.tones.push(new Tone(i));
        }
    }

    render() {
        return <div>
            <h3>Tones</h3>
            {this.tones.map((tone, i) => <ConnectedTone key={i} tone={tone} />)}
        </div>;
    }
}