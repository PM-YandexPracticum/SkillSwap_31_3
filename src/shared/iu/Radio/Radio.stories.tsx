import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';
import { useState } from 'react';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large']
      }
    },
    color: {
      control: 'color'
    },
    activeColor: {
      control: 'color'
    },
    isSelected: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    color: '#253018',
    activeColor: '#508826',
    size: 'medium',
    isSelected: false
  }
};

const CheckboxWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Radio
      isSelected={checked}
      onChange={() => setChecked(!checked)}
      color='#253018'
      activeColor='#508826'
      size='medium'
    />
  );
};

export const InteractiveExample: Story = {
  render: () => <CheckboxWithState />
};
