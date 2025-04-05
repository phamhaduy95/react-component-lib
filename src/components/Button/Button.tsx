import classNames from 'classnames';
import { Ref } from 'react';
import './Button.css';
type ButtonVariant = 'filled' | 'outlined' | 'text';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	ref?: Ref<HTMLButtonElement>;
	variant?: ButtonVariant;
	className?: string;
};

const Button = ({ children, className, ref, variant = 'filled', ...rest }: ButtonProps) => {
	return (
		<button
			className={classNames('Button', className)}
			ref={ref}
			data-variant={variant}
			{...rest}
		>
			{children}
		</button>
	);
};

export default Button;
