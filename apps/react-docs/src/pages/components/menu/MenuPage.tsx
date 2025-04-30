

import { Button, DropDownMenu, DropdownMenuProps } from '@packages/react-components';

const MenuPage = () => {
	const items: DropdownMenuProps['items'] = [
        
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
		<DropDownMenu items={items}>
			<Button>Click me</Button>
		</DropDownMenu>
	);
};

export default MenuPage;
