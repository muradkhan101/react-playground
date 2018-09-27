import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'react-emotion';
import { CodeSplittingComponent } from './CodeSplitting/CodeSplitting';
import './index.scss';


const App = () => (
    <CodeSplittingComponent />
);

ReactDOM.render(<App />, document.getElementById('root'));
