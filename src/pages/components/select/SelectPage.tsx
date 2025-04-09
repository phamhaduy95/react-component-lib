import { MultipleSelect, SingleSelect } from '@components/Select';
import { useState } from 'react';

const SelectPage = () => {
	const items = [
		{ value: 'light-monochrome', label: 'Light Monochrome' },
		{ value: 'dark-green', label: 'Dark Green' },
		{ value: 'svelte-orange', label: 'Svelte Orange' },
		{ value: 'punk-pink', label: 'Punk Pink' },
		{ value: 'ocean-blue', label: 'Ocean Blue' },
		{ value: 'b-orange', label: 'Burnt Orange', disabled: true }
	];

	const [selected, setSelectedItem] = useState<string>();

	return (
		<div className="flex flex-col gap-5">
			<section>
				<header>Default</header>
				<SingleSelect items={items} placeholder="Select a item" label="Select item" />
			</section>
			<section>
				<header>Clearable</header>
				<SingleSelect
					items={items}
					placeholder="Select a item"
					label="Select item"
					clearable
					supportingText="Aa"
					status="error"
				/>
			</section>
			<section>
				<header>Controllable State</header>
				<SingleSelect
					items={items}
					placeholder="Select a item"
					label="Select item"
					value={selected}
					onValueChange={setSelectedItem}
				/>
				<p> Selected Value: {selected}</p>
			</section>
			<section>
				<header>Multiple Select</header>
				<MultipleSelect items={items} placeholder="Select a item" />
				<p> Selected Value: {selected}</p>
			</section>
		</div>
	);
};

export default SelectPage;
