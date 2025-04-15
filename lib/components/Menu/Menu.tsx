import { Menu as ArkMenu } from '@ark-ui/react/menu';
import { ItemObject } from '@components/type';
import classNames from 'classnames';
import SubMenu from './SubMenu';

// it should allow user to group items together under one category
// it should allow user customize the menu item internal structure
// it should support multiple nesting of submenu

type StandardItem = ItemObject & {
	type?: never;
};

export type NestedMenu = ItemObject & {
	type: 'nested';
	items: MenuItem[];
};

type GroupItem = ItemObject & {
	type: 'group';
	items: MenuItem[];
};

type MenuItem = StandardItem | NestedMenu | GroupItem;

export type DropdownMenuProps = {
	className?: string;
	items?: MenuItem[];
	children?: React.ReactNode;
	CustomTrigger?: React.ReactNode;
	CustomItem?: (item: ItemObject) => React.ReactNode;
};

const DropdownMenu = ({ items = [], className, CustomTrigger, children }: DropdownMenuProps) => {
	return (
		<ArkMenu.Root>
			<ArkMenu.Trigger
				className={classNames('MenuTrigger', className)}
				asChild={!!CustomTrigger}
			>
				{CustomTrigger ?? children}
			</ArkMenu.Trigger>

			<ArkMenu.Positioner>
				<ArkMenu.Content className="Menu">
					{items.map((item) => {
						switch (item.type) {
							case 'nested':
								return <SubMenu {...item} />;
							default:
								return (
									<ArkMenu.Item
										className="Menu_Item"
										disabled={item.disabled}
										value={item.value}
										key={item.value}
									>
										{item.label}
									</ArkMenu.Item>
								);
						}
					})}
				</ArkMenu.Content>
			</ArkMenu.Positioner>
		</ArkMenu.Root>
	);
};

export default DropdownMenu;
