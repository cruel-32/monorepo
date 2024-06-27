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
    className: { control: 'text' },
    size: { control: { type: 'select', options: ['small', 'medium', 'large'] } },
  },
  args: { onClick: fn() },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    label: 'Button',
  },
};
