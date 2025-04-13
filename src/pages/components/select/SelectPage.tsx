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

	const [selectedItems, setSelectedItems] = useState<string[]>([]);

	return (
		<div className="flex flex-col gap-y-8">
			<section>
				<header>Default</header>
				<SingleSelect
					items={items}
					placeholder="Select a item"
					label="Select item"
					name="Name"
				/>
			</section>
			<section>
				<header>FormState</header>
				<div className="grid grid-cols-2 gap-4 gap-y-6">
					<SingleSelect
						items={items}
						placeholder="Select a item"
						label="Default Select"
						supportingText="default state"
					/>
					<SingleSelect
						items={items}
						status="error"
						placeholder="Select a item"
						label="Error select"
						supportingText="Error state"
					/>
					<SingleSelect
						items={items}
						status="success"
						placeholder="Select a item"
						label="Success select"
						supportingText="Success state"
					/>
					<SingleSelect
						items={items}
						status="warning"
						placeholder="Select a item"
						label="Warning select"
						supportingText="Warning state"
					/>
				</div>
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
				<p className="mt-4"> Selected Value: {selected}</p>
			</section>
			<section>
				<header>Multiple Select</header>
				<MultipleSelect
					items={items}
					placeholder="Select a item"
					value={selectedItems}
					onValueChange={(value) => setSelectedItems(value ?? [])}
				/>
				<p className="mt-4"> Selected Items: {selectedItems.join(', ')}</p>
			</section>
		</div>
	);
};

export default SelectPage;
