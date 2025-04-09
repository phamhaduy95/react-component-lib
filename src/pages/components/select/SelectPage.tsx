import SelectV2 from '@components/SingleSelect/Select';

const SelectPage = () => {
	const items = [
		{ value: 'light-monochrome', label: 'Light Monochrome' },
		{ value: 'dark-green', label: 'Dark Green' },
		{ value: 'svelte-orange', label: 'Svelte Orange' },
		{ value: 'punk-pink', label: 'Punk Pink' },
		{ value: 'ocean-blue', label: 'Ocean Blue' },
		{ value: 'sunset-red', label: 'Sunset Red' },
		{ value: 'forest-green', label: 'Forest Green' },
		{ value: 'lavender-purple', label: 'Lavender Purple' },
		{ value: 'mustard-yellow', label: 'Mustard Yellow' },
		{ value: 'slate-gray', label: 'Slate Gray' },
		{ value: 'neon-green', label: 'Neon Green' },
		{ value: 'coral-reef', label: 'Coral Reef' },
		{ value: 'midnight-blue', label: 'Midnight Blue' },
		{ value: 'crimson-red', label: 'Crimson Red' },
		{ value: 'mint-green', label: 'Mint Green' },
		{ value: 'pastel-pink', label: 'Pastel Pink' },
		{ value: 'golden-yellow', label: 'Golden Yellow' },
		{ value: 'deep-purple', label: 'Deep Purple' },
		{ value: 'turquoise-blue', label: 'Turquoise Blue' },
		{ value: 'burnt-orange', label: 'Burnt Orange' },
		{ value: 'b-orange', label: 'Burnt Orange', disabled: true }
	];

	return (
		<div>
			<SelectV2
				items={items}
				placeholder="Select a item"
				label="Select item"
				clearable
				supportingText="Aa"
				status="error"
			/>
		</div>
	);
};

export default SelectPage;
