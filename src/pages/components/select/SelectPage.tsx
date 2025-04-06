import Select, { SelectProps } from '@components/Select/Select';

const SelectPage = () => {
	const items: SelectProps['items'] = [
		{
			label: 'A',
			value: 'A'
		},
		{
			label: 'B',
			value: 'B'
		},
		{
			label: 'C',
			value: 'C'
		},
		{
			label: 'D',
			value: 'D',
			disabled: true
		}
	];

	return (
		<div>
			<Select label="Select" placeholder="Select a item" items={items} />
		</div>
	);
};

export default SelectPage;
