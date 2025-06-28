import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';
import { useState } from 'react';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
type Story = StoryObj<typeof Checkbox>;

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
    <Checkbox
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
