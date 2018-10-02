import * as React from 'react';
import * as ReactDOM from 'react-dom';
import styled from 'react-emotion';
import './index.scss';
import { Link } from 'react-router-dom';
import { RouterComponent } from './Routing/Router';
import { RouteChildComponent } from './Routing/RouteChild';


const App = () => (
    <RouterComponent>
        <React.Fragment>
            <RouteChildComponent color={'blue'} link={'/potato'} >1</RouteChildComponent>
            <RouteChildComponent color={'green'} link={'/grass'} >2</RouteChildComponent>
            <RouteChildComponent color={'orange'} link={'/orange'} >1</RouteChildComponent>
            <Link to={'/potato'}>Potato</Link>
            <Link to={'/grass'}>Grass</Link>
            <Link to={'/orange'}>Orange</Link>
        </React.Fragment>
    </RouterComponent>
);

ReactDOM.render(<App />, document.getElementById('root'));
