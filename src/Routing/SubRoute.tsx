import React from 'react';
import { Route } from 'react-router';

interface Props {
    parentRoute: string;
    route: string;
}
export class SubRouteComponent extends React.Component<Props> {
    render() {
        let { parentRoute, route } = this.props;
        return <Route path
    }
}