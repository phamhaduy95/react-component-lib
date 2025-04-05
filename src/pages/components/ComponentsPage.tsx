import NavigationBar, { type NavigationBarProps } from '@components/NavigationBar';
import { NavLink, Outlet } from 'react-router';

const ComponentsPage = () => {
	const links: NavigationBarProps['items'] = [
		{
			items: [
				{ href: '/components/button', title: 'Button' },
				{
					href: '/components/navigation-bar',
					title: 'NavigationBar'
				},
				{
					href: '/components/scrollbar',
					title: 'ScrollBar'
				}
			],
			title: 'Components'
		}
	];

	const CustomLink: NavigationBarProps['CustomLink'] = ({ href, title, onClick, disabled }) => {
		return (
			<NavLink to={href} onClick={onClick} aria-disabled={disabled} data-disabled={disabled}>
				{title}
			</NavLink>
		);
	};

	return (
		<div className="flex h-full w-full">
			<NavigationBar className="w-52" items={links} CustomLink={CustomLink} />
			<main className="px-4 py-3">
				<Outlet />
			</main>
		</div>
	);
};

export default ComponentsPage;
