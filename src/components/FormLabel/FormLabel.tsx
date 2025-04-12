import { FieldStatus } from '@components/type';
import classNames from 'classnames';
import { createElement, HTMLAttributes, HTMLElementType } from 'react';
import './FormLabel.css';

type FormLabelProps = HTMLAttributes<HTMLLabelElement> & {
	type?: HTMLElementType;
	children?: React.ReactNode;
	status?: FieldStatus;
	className?: string;
	required?: boolean;
	htmlFor?: string;
};

const FormLabel = ({
	type = 'label',
	status,
	children,
	className,
	required,
	...rest
}: FormLabelProps) => {
	const renderLabelContent = () => (required ? <>{children} '*'</> : children);

	const Component = createElement(
		type,
		{ ...rest, className: classNames('FormLabel', className), 'data-status': status },
		renderLabelContent()
	);

	return Component;
};

export default FormLabel;
