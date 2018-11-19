import React, { PureComponent, Dispatch } from 'react';
import Scale from '../../theory/music/scale';
import { IStringTheoryState, INoteLookup } from '../../redux/reducers';
import { AnyAction } from 'redux';
import { noteAction, NoteActions } from '../../redux/actions';
import { connect } from 'react-redux';
import Tone from '../../theory/music/tone';

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
            {this.props.scales.map((scale, i) => <ConnectedScale key={i} scale={scale} />)}
        </div>;
    }
}