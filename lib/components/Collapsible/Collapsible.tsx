import classNames from 'classnames';
import { Collapsible as RadixCollapsible } from 'radix-ui';
import { JSX, useState } from 'react';
import './Collapsible.css';

interface CollapsibleProps {
	isOpen?: boolean;
	defaultOpen?: boolean;
	disabled?: boolean;
	className?: string;
	onOpenChange?: (isOpen: boolean) => void;
	children?: React.ReactNode;
	Trigger: (props: { open: boolean; className?: string }) => JSX.Element;
	overrideTrigger?: boolean;
	overrideContent?: boolean;
}

const Collapsible = (props: CollapsibleProps) => {
	const {
		defaultOpen = false,
		isOpen,
		onOpenChange,
		className,
		disabled,
		Trigger,
		children,
		overrideTrigger,
		overrideContent
	} = props;
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
			<RadixCollapsible.Trigger className="CollapsibleTrigger" asChild={overrideTrigger}>
				{Trigger({ open })}
			</RadixCollapsible.Trigger>
			<RadixCollapsible.Content className="CollapsibleContent" asChild={overrideContent}>
				{children}
			</RadixCollapsible.Content>
		</RadixCollapsible.Root>
	);
};

export default Collapsible;
