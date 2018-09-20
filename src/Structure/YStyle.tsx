import { Component, Children } from 'react';
import * as React from 'react';
import styled from 'react-emotion';

const Flex = styled('div')`
    display: flex;
    @media (max-width: 900px) {
        flex-direction: column;
    }
`;
const TopItem = styled('div')`
    width: 50%;
`;
const BottomItem = styled('div')`
    width: 100%;
`;

export class YStyleComponent extends Component {
    state = {
        order: [0, 1, 2]
    };
    updateOrder() {
        let order = this.state.order.slice();
        order.push(order.shift());
        this.setState({ order });
    }
    render() {
        let { children } = this.props;
        let childArray = Children.toArray(children);
        if (childArray.length !== 3) throw new Error('YStyleComponent must only be passed 3 children');

        let { order } = this.state;
        return (
            <div>
                <button onClick={this.updateOrder.bind(this)} > Update Order </button>
                <Flex>
                    <TopItem>{childArray[order[0]]}</TopItem>
                    <TopItem>{childArray[order[1]]}</TopItem>
                </Flex>
                <BottomItem>{childArray[order[2]]}</BottomItem>
            </div>
        );
    }
}
