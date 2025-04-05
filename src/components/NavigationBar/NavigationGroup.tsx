import Collapsible from '@components/Collapsible/Collapsible';
import { JSX } from 'react';
import { NavigationLink } from './NavigationBar';

export type NavigationGroupProps = {
	label?: string;
	items: NavigationLink[];
	disabled?: boolean;
	className?: string;
	onClick?: (e: React.MouseEvent) => void;
	children: (link: NavigationLink) => JSX.Element;
};

const NavigationGroup = ({ label, items, children }: NavigationGroupProps) => {
	const renderItems = () => {
		return items.map((item) => children(item));
	};

	return (
		<li>
			<Collapsible className="NavigationGroup" Trigger={() => <span>{label}</span>}>
				<ul className="NavigationGroupList">{renderItems()}</ul>
			</Collapsible>
		</li>
	);
};

export default NavigationGroup;
