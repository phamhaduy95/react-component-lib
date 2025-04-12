import { BaseCombobox } from '@components/Combobox/BaseComboBox';

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
			<section>
				<BaseCombobox items={items} />
			</section>
		</div>
	);
};

export default ComboboxPage;
