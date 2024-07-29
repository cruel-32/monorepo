import { FC } from 'react';
// import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import MButton, { ButtonProps } from '@mui/material/Button';
export type { ButtonProps } from '@mui/material/Button';

export const Button: FC<ButtonProps> = ({ className, children, variant, ...props }) => {
  return (
    <MButton variant={variant} className={classnames(className)} {...props}>
      {children}
    </MButton>
  );
};
