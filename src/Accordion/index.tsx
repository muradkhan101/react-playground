import * as React from 'react';
import './index.scss';

interface Props {
    isOpen: boolean;
}
export default class Accordion extends React.Component<Props> {
    accordionContainer = React.createRef<HTMLDivElement>();
    componentDidMount() {
        // Make it re-render when refs are loaded
        this.setState({});
    }
    render() {
        let { children, isOpen } = this.props;
        let accordion = this.accordionContainer.current;
        let styles: React.CSSProperties = {
            transition: 'height 350ms ease-out',
            overflow: 'hidden',
        };
        if (accordion) {
            styles.height = isOpen ? accordion.getBoundingClientRect().height + 'px' : '0px';
            console.log('IS OPEN PROPS', isOpen, styles);
        }
        return (
            <div className="ins-accordion-wrapper" style={styles}>
                <div className="ins-accordion-content" ref={this.accordionContainer}>
                    {children}
                </div>
            </div>
        );
    }
}
