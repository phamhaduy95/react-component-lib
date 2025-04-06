import classNames from 'classnames';
import { ScrollArea as RadixScrollArea } from 'radix-ui';

type ScrollAreaProps = RadixScrollArea.ScrollAreaProps & {
	children?: React.ReactNode;
	maxHeight?: string;
	className?: string;
};

const ScrollArea = ({ children, maxHeight, className, ...rest }: ScrollAreaProps) => (
	<RadixScrollArea.Root
		className={classNames('ScrollAreaRoot', className)}
		type="always"
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

export default ScrollArea;
