import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'react-emotion';
import { TestComponent } from './CodeSplitter/SplitTest/TestComponent';
import './index.scss';


const App = () => (
    <TestComponent />
);

ReactDOM.render(<App />, document.getElementById('root'));
