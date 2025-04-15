import { FieldStatus } from '@components/type';
import classNames from 'classnames';
import './SupportingText.css';

export type SupportingTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
	children: React.ReactNode;
	status?: FieldStatus;
	isDisplayed?: boolean;
	className?: string;
	show?: boolean;
};

const SupportingText = ({
	children,
	className,
	status,
	show = true,
	...rest
}: SupportingTextProps) => {
	if (show)
		return (
			<p {...rest} className={classNames(className, 'SupportingText')} data-status={status}>
				{children}
			</p>
		);
	return null;
};

export default SupportingText;
