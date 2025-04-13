import { Menu as ArkMenu } from '@ark-ui/react/menu';
import { ItemObject } from '@components/type';

// it should allow user to group items together under one category
// it should allow user customize the menu item internal structure
// it should support multiple nesting of submenu

export type DropdownMenuProps = {
	className?: string;
	items?: ItemObject[];
};

const DropdownMenu = ({ items = [] }: DropdownMenuProps) => {
	return (
		<ArkMenu.Root>
			<ArkMenu.Trigger className="MenuTrigger">Open menu</ArkMenu.Trigger>
			<ArkMenu.Positioner>
				<ArkMenu.Content>
					{items.map((item) => (
						<ArkMenu.Item disabled={item.disabled} value={item.value} key={item.value}>
							{item.label}
						</ArkMenu.Item>
					))}
				</ArkMenu.Content>
			</ArkMenu.Positioner>
		</ArkMenu.Root>
	);
};

export default DropdownMenu;
