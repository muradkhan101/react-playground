import { env } from './environments/environment';
import * as React from 'react';
declare let process: any;
class Thing extends React.Component<{}, {}> {
    render() {
        return <div>Pooooping</div>;
    }
}
if (process.env.NODE_ENV ==='dev') {
    console.log('DEV!');
} else {
    console.log('NOT DEV');
}