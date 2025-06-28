import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxMinus } from './CheckboxMinus';
import { useState } from 'react';

const meta: Meta<typeof CheckboxMinus> = {
  title: 'Components/CheckboxMinus',
  component: CheckboxMinus,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      control: 'color',
    },
    activeColor: {
      control: 'color',
    },
    isChecked: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxMinus>;

export const Default: Story = {
  args: {
    color: '#253018',
    activeColor: '#ABD27A',
    size: 'medium',
    isChecked: false,
  },
};

const CheckboxWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <CheckboxMinus
      isChecked={checked}
      onChange={() => setChecked(!checked)}
      color="#253018"
      activeColor="#ABD27A"
      size="medium"
    />
  );
};

export const InteractiveExample: Story = {
  render: () => <CheckboxWithState />,
};
