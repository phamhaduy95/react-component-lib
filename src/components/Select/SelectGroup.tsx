import { Select as RadixSelect } from 'radix-ui';
import { GroupItem } from './Select';
import SelectItem from './SelectItem';

type SelectGroupProps = {
	group: GroupItem;
};

const SelectGroup = ({ group }: SelectGroupProps) => {
	const { items, label } = group;

	return (
		<>
			<RadixSelect.Group className="SelectGroup">
				{label && (
					<RadixSelect.Label className="SelectGroup_Label">label</RadixSelect.Label>
				)}
				{items.map((item) => (
					<SelectItem value={item.value} disabled={item.disabled}>
						{item.label}
					</SelectItem>
				))}
			</RadixSelect.Group>
			<RadixSelect.Separator />
		</>
	);
};

export default SelectGroup;
