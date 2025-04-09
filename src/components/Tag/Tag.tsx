import { Cross2Icon } from '@radix-ui/react-icons';
import classNames from 'classnames';
import { HTMLAttributes, Ref } from 'react';
import './Tag.css';
type TagSize = 'small' | 'default';
type TagVariant = 'primary' | 'secondary' | 'error' | 'success' | 'warning' | 'outlined';

export type TagProps = HTMLAttributes<HTMLDivElement> & {
	label?: string;
	removable?: boolean;
	className?: string;
	onRemoveClick?: (e: React.MouseEvent) => void;
	ref?: Ref<HTMLDivElement>;
	size?: TagSize;
	variant?: TagVariant;
};

export const Tag = ({
	label,
	removable,
	className,
	ref,
	onRemoveClick,
	size,
	variant = 'primary',
	...rest
}: TagProps) => {
	return (
		<div
			className={classNames('Tag', className)}
			data-removable={removable}
			data-size={size}
			data-variant={variant}
			ref={ref}
			{...rest}
		>
			<span className="Tag_Label">{label}</span>
			{removable ? (
				<button
					className="Tag_RemoveButton"
					onClick={onRemoveClick}
					type="button"
					aria-label="Remove Tag"
				>
					<Cross2Icon />
				</button>
			) : null}
		</div>
	);
};
