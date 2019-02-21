import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import styled from 'react-emotion';

import './index.scss';
// import Accordion from './Accordion';
import { InfiniteScroller } from './InfiniteScroll';

// const Para = styled('p')`
//     font-size: 48px;
//     font-family: 'Helvetica Neue', 'Franklin Gothic', sans-serif;
//     margin: 0 auto;
//     color: #313131;
// `;

class App extends React.Component {
    state = {
        isOpen: true,
    };
    render() {
        let { isOpen } = this.state;
        console.log('IS OPEN', isOpen);
        return (
            <React.Fragment>
                <InfiniteScroller onScroll={() => console.log('SCROLLING')}>
                    <div style={{ height: '150vh' }}>THINGY</div>
                </InfiniteScroller>
            </React.Fragment>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
