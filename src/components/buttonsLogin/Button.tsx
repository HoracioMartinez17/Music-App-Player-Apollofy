import { ButtonLogin } from './button.styles';
import { MouseEventHandler } from 'react';

type ButtonProps = {
	children: React.ReactNode;
	handleClick: MouseEventHandler<HTMLButtonElement>;
	isDisabled?: boolean;
};
export const Button = ({ children, handleClick, isDisabled }: ButtonProps) => {
	return (
		<ButtonLogin disabled={isDisabled} onClick={handleClick}>
			<span className="shadow"></span>
			<span className="front font-size">
				<strong>{children}</strong>
			</span>
		</ButtonLogin>
	);
};
