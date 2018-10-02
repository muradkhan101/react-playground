import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export class RouterComponent extends React.Component {
    render() {
        return <BrowserRouter>
            {this.props.children}
        </BrowserRouter>
    }
}