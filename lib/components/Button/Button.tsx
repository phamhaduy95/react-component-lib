import classNames from 'classnames';
import { Ref } from 'react';
import './Button.css';
type ButtonVariant = 'filled' | 'outlined' | 'text';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	ref?: Ref<HTMLButtonElement>;
	variant?: ButtonVariant;
	className?: string;
	a?: string;
};

const Button = ({
	children,
	className,
	ref,
	variant = 'filled',
	type = 'button',
	...rest
}: ButtonProps) => {
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
