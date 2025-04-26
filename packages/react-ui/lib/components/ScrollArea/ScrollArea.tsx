import classNames from 'classnames';
import { ScrollArea as RadixScrollArea } from 'radix-ui';
import './ScrollArea.css';

export interface ScrollAreaProps extends RadixScrollArea.ScrollAreaProps {
	children?: React.ReactNode;
	maxHeight?: string;
	className?: string;
}

const ScrollArea = (props: ScrollAreaProps) => {
	const { children, maxHeight, className, ...rest } = props;

	return (
		<RadixScrollArea.Root
			className={classNames('ScrollAreaRoot', className)}
			scrollHideDelay={100}
			{...rest}
		>
			<RadixScrollArea.Viewport className="ScrollAreaViewport" style={{ maxHeight }}>
				{children}
			</RadixScrollArea.Viewport>
			<RadixScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
				<RadixScrollArea.Thumb className="ScrollAreaThumb" />
			</RadixScrollArea.Scrollbar>
			<RadixScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
				<RadixScrollArea.Thumb className="ScrollAreaThumb" />
			</RadixScrollArea.Scrollbar>
			<RadixScrollArea.Corner className="ScrollAreaCorner" />
		</RadixScrollArea.Root>
	);
};

export default ScrollArea;
