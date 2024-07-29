import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonProps } from '@monorepo/common/src/components/atoms/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: 'class를 추가합니다.',
      control: 'text'
    },
    disabled: {
      description: 'disabled 상태를 변경합니다.',
      control: 'boolean',
    },
    variant: {
      description: '버튼 스타일을 설정합니다.',
      defaultValue: 'contained',
      options: ['text', 'contained', 'outlined'],
      control: {
        type: 'select',
      },
    }
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    children: 'Button',
    variant: 'contained',
  },
};

export const Outlined: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
  },
};
