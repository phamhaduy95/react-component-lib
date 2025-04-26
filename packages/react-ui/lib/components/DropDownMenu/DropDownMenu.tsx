import { Menu as ArkMenu } from '@ark-ui/react/menu';
import { ItemObject } from '@components/type';
import classNames from 'classnames';
import { JSX } from 'react';
import SubMenu from '../SubMenu/SubMenu';

interface StandardItem extends ItemObject {
	type?: never;
}

export interface NestedMenu extends ItemObject {
	type: 'nested';
	items: MenuItem[];
}

interface GroupItem extends ItemObject {
	type: 'group';
	items: MenuItem[];
}

type MenuItem = StandardItem | NestedMenu | GroupItem;

export interface DropdownMenuProps {
	className?: string;
	items?: MenuItem[];
	children?: React.ReactNode;
	CustomTrigger?: React.ReactNode;
	CustomItem?: (item: ItemObject) => React.ReactNode;
}

const DropDownMenu = (props: DropdownMenuProps): JSX.Element => {
	const { items = [], className, CustomTrigger, children } = props;
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

export default DropDownMenu;
