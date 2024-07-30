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
    variant: {
      description: '버튼 스타일을 설정합니다.',
      defaultValue: 'contained',
      options: ['text', 'contained', 'outlined'],
      control: {
        type: 'select',
      },
      type: { name: 'string', required: false },
    },
    color: {
      description: '버튼의 색상을 MUI 기본 제공 설정값으로 변경합니다.',
      defaultValue: 'primary',
      options: [
        'inherit', 'primary', 'secondary', 'success', 'error', 'info', 'warning'
      ],
      control: {
        type: 'select',
      },
      type: { name: 'string', required: false },
    },
    className: {
      description: 'class를 추가합니다.',
      control: 'text',
      type: { name: 'string', required: false },
    },
    disabled: {
      description: 'disabled 상태를 변경합니다.',
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
    fullWidth: {
      description: 'Button을 감싼 컨테이너 전체 넓이를 차지합니다.',
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
    href: {
      description: '버튼을 a 태그로 변경합니다.',
      type: { name: 'string', required: false },
      control: 'text',
    },
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
