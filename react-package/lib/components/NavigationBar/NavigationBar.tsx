import { JSX } from 'react';
import './NavigationBar.css';
import NavigationGroup from './NavigationGroup';

export type NavigationLink = {
	href: string;
	title: string;
	icon?: JSX.Element;
	disabled?: boolean;
	className?: string;
	onClick?: (e: React.MouseEvent) => void;
};

export type NavigationGroup = {
	title?: string;
	items: NavigationLink[];
	disabled?: boolean;
	className?: string;
	onClick?: (e: React.MouseEvent) => void;
};

export type NavigationBarProps = {
	className?: string;
	items: Array<NavigationLink | NavigationGroup>;
	CustomLink?: (link: NavigationLink) => JSX.Element;
};

const NavigationBar = ({ items = [], CustomLink }: NavigationBarProps) => {
	const renderLink = (props: NavigationLink) => {
		const { title, onClick, disabled } = props;

		if (CustomLink) {
			return (
				<li className="NavigationItem">
					<CustomLink className={'NavigationLink'} {...props} />
				</li>
			);
		}

		return (
			<li className="NavigationItem">
				<a
					className="NavigationLink"
					onClick={onClick}
					aria-disabled={disabled}
					data-disabled={disabled}
				>
					{title}
				</a>
			</li>
		);
	};

	const renderItems = () => {
		return items.map((item) => {
			if ('items' in item) {
				const { items, title } = item;
				return (
					<NavigationGroup label={title} items={items}>
						{renderLink}
					</NavigationGroup>
				);
			}
			return renderLink(item);
		});
	};

	return (
		<nav className="NavigationBar">
			<ul className="NavigationBar_Content">{renderItems()}</ul>
		</nav>
	);
};

export default NavigationBar;
