import * as React from 'react';

interface Props {
    onScroll: () => any;
    // When should scroll event occur? (Percent of height from bottom)
    scrollPercent?: number;
    // Container to check for scroll events
    scrollContainer?: HTMLElement | string;
}
export class InfiniteScroller extends React.Component<Props> {
    container = React.createRef<HTMLDivElement>();

    componentDidMount() {
        // Use document as default for scroll events
        let scrollContainer = this.getScrollContainer(document);
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', this.scrollCheck);
        }
    }
    componentWillUnmount() {
        let scrollContainer = this.getScrollContainer(document);
        if (scrollContainer) {
            scrollContainer.removeEventListener('scroll', this.scrollCheck);
        }
    }
    private scrollCheck = () => {
        // Use this element to check for scroll height numbers
        // .main-body is the selector of the element that the main page scrolls relative to
        // If infinite scroll suddenly stops working, change the selector
        let container = this.getScrollContainer('.main-body');
        let scrollPercent = this.props.scrollPercent || 10;
        let totalHeight = container.scrollHeight;
        let amountScrolled = container.scrollTop;
        let scrolledPercent = ((container.offsetHeight + amountScrolled) / totalHeight) * 100;

        if (100 - scrolledPercent < scrollPercent) {
            this.props.onScroll();
        }
    };
    private getScrollContainer(defaultElement): HTMLElement {
        let scrollContainer: HTMLElement | string = this.props.scrollContainer || defaultElement;
        scrollContainer = typeof scrollContainer === 'string' ? (document.querySelector(scrollContainer) as HTMLElement) : scrollContainer;

        if (!scrollContainer) console.error(`Scroll container not found for selector ${this.props.scrollContainer}`);
        return scrollContainer;
    }
    render() {
        let { children } = this.props;
        return (
            <div ref={this.container} className="infinite-scroll-container">
                {children}
            </div>
        );
    }
}
