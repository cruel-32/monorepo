import type { Meta } from '@storybook/react';
import { fn } from '@storybook/test';
import { Input, InputProps } from '@monorepo/common/src/components/atoms/Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
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
      description: 'Input을 감싼 컨테이너 전체 넓이를 차지합니다.',
      defaultValue: false,
      control: 'boolean',
      type: { name: 'boolean', required: false },
    },
  },
  args: { onClick: fn() },
} satisfies Meta<InputProps>;

export default meta;
