import { Ref } from 'react';

type ButtonVariant = 'filled' | 'outlined';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> & {
	children?: React.ReactNode;
	ref?: Ref<HTMLButtonElement>;
	variant?: ButtonVariant;
};

const Button = ({ children, ref, variant, ...rest }: ButtonProps) => {
	return (
		<button ref={ref} data-variant={variant} {...rest}>
			{children}
		</button>
	);
};

export default Button;
