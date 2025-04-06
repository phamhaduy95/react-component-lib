import { CheckIcon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import { Select as RadixSelect } from 'radix-ui';

type SelectItemProps = RadixSelect.SelectItemProps & {
	children?: React.ReactNode;
	className?: string;
	ref?: React.Ref<HTMLDivElement>;
	label?: string;
};

const SelectItem = ({ label, className, ref, ...rest }: SelectItemProps) => {
	return (
		<RadixSelect.Item
			{...rest}
			className={classNames('Menu_Item SelectItem', className)}
			ref={ref}
		>
			<RadixSelect.ItemText>{label}</RadixSelect.ItemText>
			<RadixSelect.ItemIndicator className="MenuItem_TrailingIcon" asChild>
				<CheckIcon height={20} width={20} />
			</RadixSelect.ItemIndicator>
		</RadixSelect.Item>
	);
};

export default SelectItem;
