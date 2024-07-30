import { FC } from 'react';
// import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import MInput, { InputProps } from '@mui/material/Input';
export type { InputProps } from '@mui/material/Input';

export const Input: FC<InputProps> = ({ className, ...props }) => {
  return <MInput className={classnames(className)} {...props} />;
};
