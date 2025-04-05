import { CheckIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import { Select as RadixSelect } from 'radix-ui';

type SelectItemProps = RadixSelect.SelectItemProps & {
	children?: React.ReactNode;
	className?: string;
	ref?: React.Ref<HTMLDivElement>;
};

const SelectItem = ({ children, className, ref, ...rest }: SelectItemProps) => {
	return (
		<RadixSelect.Item {...rest} className={classNames('SelectItem', className)} ref={ref}>
			<RadixSelect.ItemText>{children}</RadixSelect.ItemText>
			<RadixSelect.ItemIndicator className="SelectItemIndicator">
				<CheckIcon />
			</RadixSelect.ItemIndicator>
		</RadixSelect.Item>
	);
};

export default SelectItem;
