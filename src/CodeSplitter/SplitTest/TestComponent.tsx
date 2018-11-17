import React from 'react';
import { LazyLoader } from '../CodeSplitter';

const LazyComponent = LazyLoader({
    load: () => import('./LazyLoaded'),
    whileLoading: err => (err ? <h2>Something horrible happened!</h2> : <h1>Give me a minute, I'm Loading!!!!</h1>),
});

export class TestComponent extends React.Component {
    state = {
        lazyLoad: false,
    };
    render() {
        return !this.state.lazyLoad ? (
            <button onClick={() => this.setState({ lazyLoad: true })}> Lazy Load A Component </button>
        ) : (
            <LazyComponent />
        );
    }
}
