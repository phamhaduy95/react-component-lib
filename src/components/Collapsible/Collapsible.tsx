import classNames from 'classnames';
import { Collapsible as RadixCollapsible } from 'radix-ui';
import { JSX, useState } from 'react';
import './Collapsible.css';

type CollapsibleProps = {
	isOpen?: boolean;
	defaultOpen?: boolean;
	disabled?: boolean;
	className?: string;
	onOpenChange?: (isOpen: boolean) => void;
	children?: React.ReactNode;
	Trigger: (props: { open: boolean; className?: string }) => JSX.Element;
};

const Collapsible = ({
	defaultOpen = false,
	isOpen,
	onOpenChange,
	className,
	disabled,
	Trigger,
	children
}: CollapsibleProps) => {
	const [internalOpen, setInternalOpen] = useState(defaultOpen);

	const open = isOpen ?? internalOpen;

	const handleOpenChange = (open: boolean) => {
		if (onOpenChange) onOpenChange(open);
		setInternalOpen(open);
	};

	return (
		<RadixCollapsible.Root
			className={classNames('CollapsibleRoot', className)}
			open={open}
			onOpenChange={handleOpenChange}
			disabled={disabled}
		>
			<RadixCollapsible.Trigger className="CollapsibleTrigger">
				{Trigger({ open })}
			</RadixCollapsible.Trigger>
			<RadixCollapsible.Content className="CollapsibleContent">
				{children}
			</RadixCollapsible.Content>
		</RadixCollapsible.Root>
	);
};

export default Collapsible;
