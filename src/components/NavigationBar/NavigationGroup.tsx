import Collapsible from '@components/Collapsible/Collapsible';
import { ChevronDownIcon } from '@radix-ui/react-icons';
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
			<Collapsible
				className="NavigationGroup"
				Trigger={() => (
					<>
						<span>{label}</span>{' '}
						<ChevronDownIcon className="ml-auto" height={20} width={20} />
					</>
				)}
				overrideContent
			>
				<ul className="NavigationGroupList">{renderItems()}</ul>
			</Collapsible>
		</li>
	);
};

export default NavigationGroup;
