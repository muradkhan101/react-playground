import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'react-emotion';

import './index.scss';
import Accordion from './Accordion';

const Para = styled('p')`
    font-size: 48px;
    font-family: 'Helvetica Neue', 'Franklin Gothic', sans-serif;
    margin: 0 auto;
    color: #313131;
`;

class App extends React.Component {
    state = {
        isOpen: true,
    };
    render() {
        let { isOpen } = this.state;
        console.log('IS OPEN', isOpen);
        return (
            <React.Fragment>
                <button onClick={() => this.setState({ isOpen: !isOpen })}>Open / Close</button>
                <Accordion isOpen={isOpen}>
                    <h1>Accordian</h1>
                    <Para>Accordian!!!</Para>
                </Accordion>
                )
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
