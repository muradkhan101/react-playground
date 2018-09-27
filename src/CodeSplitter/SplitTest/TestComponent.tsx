import React from 'react';
import { LazyLoader } from '../CodeSplitter';

let promise: () => Promise<{[key: string]: React.ReactNode}> = () => new Promise( (resolve, reject) => {
    setTimeout(() => resolve(import('./LazyLoaded')), 2000);
});

const LazyComponent = LazyLoader({
    load: () => promise(),
    whileLoading: () => <h1>Give me a minute, I'm Loading!!!!</h1>,
});

export class TestComponent extends React.Component {
    state = {
        lazyLoad: false
    };
    render() {
        return !this.state.lazyLoad
            ? <button onClick={() => this.setState({lazyLoad: true})} > Lazy Load A Component </button>
            : <LazyComponent />;
    }
}
