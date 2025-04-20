import { Menu } from '@ark-ui/react/menu';
import { NestedMenu } from '@components/DropDownMenu';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { JSX } from 'react';

export type SubMenuProps = NestedMenu;

const SubMenu = (props: SubMenuProps): JSX.Element => {
	const { items, label } = props;
	return (
		<Menu.Root>
			<Menu.TriggerItem className="Menu_Item">
				{label}
				<ChevronRightIcon className="ml-auto" height={16} width={16} />
			</Menu.TriggerItem>
			<Menu.Positioner>
				<Menu.Content className="Menu">
					{items.map((item) => {
						switch (item.type) {
							case 'nested':
								return <SubMenu {...item} />;
							default:
								return (
									<Menu.Item
										className="Menu_Item"
										disabled={item.disabled}
										value={item.value}
										key={item.value}
									>
										{item.label}
									</Menu.Item>
								);
						}
					})}
				</Menu.Content>
			</Menu.Positioner>
		</Menu.Root>
	);
};

export default SubMenu;
