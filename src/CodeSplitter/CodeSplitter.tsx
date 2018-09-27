import React from 'react';

interface LazyLoaderInput {
    load: () => Promise<{[key: string]: React.ComponentClass}>;
    whileLoading?: () => React.ReactNode;
    onError?: () => any;
}

/**
 * @description A Higher Order Component that simplifies the process of lazy loading a component
 * @argument input - An object that contains the options for lazy loading
 * @returns A Component that will display the Lazy Loaded component once the files are ready
 * @summary Pass it a function returning an import statement () => import('./yourComponent'),
 *          and optionally a component to show whileLoading or what to do on error
 */

export const LazyLoader = (input: LazyLoaderInput) => {
    if (!input.load) throw new Error('LazyLoader requires a component to lazy load passed through the \'load\' key');

    let opts: LazyLoaderInput = Object.assign({
        load: null,
        whileLoading: null,
        onError: null
    }, input);

    return class LazyLoadedComponent extends React.Component {
        state = {
            loading: true,
            loaded: null as React.ComponentClass,
            err: null
        };

        private loadComponent() {
            opts.load()
                .then(component => {
                    this.setState({
                        loading: false,
                        loaded: component && component.__esModule ? component.default : component
                    });
                }).catch(err => {
                    this.setState({
                        loading: false,
                        err: err
                    });
                    throw err;
                });
        }
        componentDidMount() {
            this.loadComponent();
        }
        render() {
            if (this.state.loading || this.state.err) {
                return opts.whileLoading
                    ? opts.whileLoading()
                    : null;
            } else if (this.state.loaded) {
                let Component = this.state.loaded;
                return <Component {...this.props} />
            }
            return null;
        }
    };
};
