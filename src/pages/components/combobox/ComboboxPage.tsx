import { MultipleCombobox } from '@components/Combobox';
import SingleCombobox from '@components/Combobox/SingleCombobox';

const ComboboxPage = () => {
	const items = [
		{ value: 'light-monochrome', label: 'Light Monochrome' },
		{ value: 'dark-green', label: 'Dark Green' },
		{ value: 'svelte-orange', label: 'Svelte Orange' },
		{ value: 'punk-pink', label: 'Punk Pink' },
		{ value: 'ocean-blue', label: 'Ocean Blue' },
		{ value: 'b-orange', label: 'Burnt Orange', disabled: true }
	];

	return (
		<div>
			<section className="mb-8">
				<header> Multiple Combobox</header>
				<MultipleCombobox
					items={items}
					label="Multiple combobox"
					supportingText="please"
					placeholder="Search"
				/>
			</section>
			<section className="mb-5">
				<header> Single Combobox</header>
				<SingleCombobox
					items={items}
					label="Select one item"
					supportingText="pick item that you like"
					placeholder="Search"
				/>
			</section>
		</div>
	);
};

export default ComboboxPage;
