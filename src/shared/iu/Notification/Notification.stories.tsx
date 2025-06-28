import type { Meta, StoryObj } from '@storybook/react';
import { Notification } from './Notification';
import { useState } from 'react';

const meta: Meta<typeof Notification> = {
  title: 'Components/Notification',
  component: Notification,
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
    activeCircle: {
      control: 'color'
    },
    isVisible: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    color: '#253018',
    activeCircle: '#E0796E',
    size: 'medium',
    isVisible: false
  }
};

const CheckboxWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Notification
      isVisible={checked}
      onChange={() => setChecked(!checked)}
      color='#253018'
      activeCircle='#E0796E'
      size='medium'
    />
  );
};

export const InteractiveExample: Story = {
  render: () => <CheckboxWithState />
};
