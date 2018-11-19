import React, { PureComponent } from 'react';
import Scale from '../../theory/music/scale';

export interface IScaleProps {
    scale: Scale;
}

export default class ScaleComponent extends PureComponent<IScaleProps> {
    render() {
        return <div>
            {this.props.scale.toString()}
        </div>
    }
}

export interface IScaleListProps {
    scales: Scale[];
}

export class ScaleListComponent extends PureComponent<IScaleListProps>{
    render() {
        return <div>
            {this.props.scales.map((scale, i) => <ScaleComponent key={i} scale={scale} />)}
        </div>;
    }
}