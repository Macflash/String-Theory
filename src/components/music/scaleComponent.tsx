import React, { PureComponent } from 'react';
import Note from '../../theory/music/note';
import { connect } from 'react-redux';
import { IStringTheoryState, Lookup } from '../../redux/reducers';
import { AnyAction, Dispatch } from 'redux';
import { toneAction, SelectionAction } from '../../redux/actions';
import Tone from '../../theory/music/tone';

/*
export interface IScaleProps {
    scale: Scale;
    selectedNotes: INoteLookup;
    toggleScale: (notes: number[]) => void;
}

class ScaleComponent extends PureComponent<IScaleProps> {
    private onClick = () => {
        this.props.toggleScale(this.props.scale.tones.map(t => t.note));
    }

    render() {
        const fullMatch = Tone.FullMatch(this.props.scale.tones, this.props.selectedNotes);
        const partialMatch = Tone.PartialMatch(this.props.scale.tones, this.props.selectedNotes);

        return (
            (fullMatch || partialMatch) ?
                <div
                    onClick={this.onClick}
                    style={{
                        cursor: "pointer",
                        color: fullMatch ? "green" : "",
                    }} >
                    {this.props.scale.toString()}
                </div>
                : null);
    }
}

const mapStateToProps = (state: IStringTheoryState) => {
    return { selectedNotes: state.selectedNotes };
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        toggleScale: (notes: number[]) => dispatch(noteAction(NoteActions.Toggle, notes)),
    };
}

const ConnectedScale = connect(mapStateToProps, mapDispatchToProps)(ScaleComponent);

export default ConnectedScale;

export interface IScaleListProps {
    scales: Scale[];
}

export class ScaleListComponent extends PureComponent<IScaleListProps>{
    render() {
        return <div>
            <h3>Scales</h3>
            {this.props.scales.map((scale, i) => <ConnectedScale key={i} scale={scale} />)}
        </div>;
    }
}
*/