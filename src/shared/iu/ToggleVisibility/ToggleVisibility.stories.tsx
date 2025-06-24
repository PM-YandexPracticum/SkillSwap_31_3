import type { Meta, StoryObj } from '@storybook/react';
import { ToggleVisibility } from './ToggleVisibility';
import { useState } from 'react';

const meta: Meta<typeof ToggleVisibility> = {
  title: 'Components/ToggleVisibility',
  component: ToggleVisibility,
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
    isVisible: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof ToggleVisibility>;

export const Default: Story = {
  args: {
    color: '#253018',
    activeColor: '#253018',
    size: 'medium',
    isVisible: false
  }
};

const CheckboxWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ToggleVisibility
      isVisible={checked}
      onChange={() => setChecked(!checked)}
      color='#253018'
      activeColor='#253018'
      size='medium'
    />
  );
};

export const InteractiveExample: Story = {
  render: () => <CheckboxWithState />
};
