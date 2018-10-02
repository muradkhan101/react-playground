import React from 'react';
import { Route } from 'react-router';

interface Props {
    color: string;
    link: string;
}
export class RouteChildComponent extends React.Component<Props> {
    render() {
        let color = this.props.color || 'blue';
        let link = this.props.link;
        return <Route path={link}
        render={ (match) =>
            console.log(match) || <div style={{
                background: color,
                width: 200,
                height: 200
            }}>{this.props.children}</div>
        }
        ></Route>
    }
}