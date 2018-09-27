import React from 'react';

interface LazyLoaderInput {
    load: () => Promise<{[key: string]: React.ReactNode}>;
    whileLoading?: () => React.ReactNode;
    onError?: () => any;
    moduleName?: string;
}
export const LazyLoader = (input: LazyLoaderInput) => {
    return class LazyLoadedComponents extends React.Component {
        state = {
            loading: true,
            loadedComponent: undefined as React.ReactNode
        };
        componentDidMount() {
            let moduleName = input.moduleName || 'default';
            input.load().then(component => {
                this.setState({
                    loading: false,
                    loadedComponent: component[moduleName] as any
                });
            });
        }
        render() {
            let LoadedComponent = this.state.loadedComponent as any;
            console.log(LoadedComponent);
            return this.state.loading
                ? (input.whileLoading && input.whileLoading()) || <h1>This thang is loading my dude!!!</h1>
                : <LoadedComponent />;
        }
    };
};
