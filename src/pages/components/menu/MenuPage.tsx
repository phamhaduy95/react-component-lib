import Button from '@components/Button';
import DropdownMenu from '@components/Menu/Menu';
import { ComponentProps } from 'react';

const MenuPage = () => {
	const items: ComponentProps<typeof DropdownMenu>['items'] = [
		{ value: 'light-monochrome', label: 'Light Monochrome' },
		{ value: 'dark-green', label: 'Dark Green' },
		{ value: 'svelte-orange', label: 'Svelte Orange' },
		{ value: 'punk-pink', label: 'Punk Pink' },
		{
			type: 'nested',
			label: 'AA',
			value: '',
			items: [
				{ value: 'ocean-blue', label: 'Ocean Blue' },
				{ value: 'b-orange', label: 'Burnt Orange' },
				{
					value: 'b-orange',
					label: 'Burnt Orange',
					type: 'nested',
					items: [
						{ value: 'light-monochrome', label: 'Light Monochrome' },
						{ value: 'dark-green', label: 'Dark Green' },
						{ value: 'svelte-orange', label: 'Svelte Orange' }
					]
				}
			]
		}
	];

	return (
		<DropdownMenu items={items}>
			<Button>Click me</Button>
		</DropdownMenu>
	);
};

export default MenuPage;
