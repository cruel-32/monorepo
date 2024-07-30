import { FC } from 'react';
// import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import MButton, { ButtonProps } from '@mui/material/Button';
export type { ButtonProps } from '@mui/material/Button';

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <MButton className={classnames(className)} {...props}>
      {children}
    </MButton>
  );
};
