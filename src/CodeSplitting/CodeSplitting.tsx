import * as React from 'react';

export class CodeSplittingComponent extends React.Component {
    state = {
        components: [] as any,
    };

    onClick = () => {
        const componentPromise = import(/* webpackChunkName: "LoadedComponent" */ './LoadedComponent/LoadedComponent');
        componentPromise.then(
            comp => (
                console.log(comp),
                this.setState({
                    components: [...this.state.components, comp.default],
                })
            ),
        );
    };
    render() {
        return (
            <React.Fragment>
                <button onClick={this.onClick}>Load Component</button>
                {this.state.components.map((Component: any) => (
                    <Component />
                ))}
            </React.Fragment>
        );
    }
}
