import { FormStatus } from '@components/type';
import classNames from 'classnames';
import './SupportingText.css';

export type SupportingTextProps = React.HTMLAttributes<HTMLParagraphElement> & {
	children: React.ReactNode;
	status?: FormStatus;
	isDisplayed?: boolean;
	className?: string;
};

const SupportingText = ({ children, className, status, ...rest }: SupportingTextProps) => {
	return (
		<p {...rest} className={classNames(className, 'SupportingText')} data-status={status}>
			{children}
		</p>
	);
};

export default SupportingText;
