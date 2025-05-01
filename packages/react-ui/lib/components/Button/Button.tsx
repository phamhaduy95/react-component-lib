import classNames from 'classnames';
import { JSX, Ref } from 'react';

import './Button.css';

type ButtonVariant = 'filled' | 'outlined' | 'text';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children?: React.ReactNode;
	ref?: Ref<HTMLButtonElement>;
	variant?: ButtonVariant;
	className?: string;
	a?: string;
}

const Button = (props: ButtonProps): JSX.Element => {
	const { children, className, ref, variant = 'filled', type = 'button', ...rest } = props;

	return (
		<button
			className={classNames('Button', className)}
			ref={ref}
			data-variant={variant}
			type={type}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
