import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  buttonType?: Colors;
  className?: string;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  isLoading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const Button = ({ buttonType = 'primary', size = 'medium', isLoading = false, label, className, children, ...props }: ButtonProps) => {
  return (
    <button type="button" className={classnames('btns', buttonType)} {...props}>
      {label || children}
    </button>
  );
};
