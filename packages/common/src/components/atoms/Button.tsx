import { FC } from 'react';
// import { FC, DetailedHTMLProps, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';
import { Button as HButton, ButtonProps } from '@headlessui/react';
export type { ButtonProps } from '@headlessui/react';

export const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <HButton
      type="button"
      className={classnames(
        'rounded border border-transparent text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-blue-200',
        className,
      )}
      {...props}
    >
      {children}
    </HButton>
  );
};
