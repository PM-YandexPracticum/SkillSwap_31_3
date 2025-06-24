import type { Meta, StoryObj } from '@storybook/react';
import { RadioSlider } from './RadioSlider';
import { useState } from 'react';

const meta: Meta<typeof RadioSlider> = {
  title: 'Components/RadioSlider',
  component: RadioSlider,
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
    isOn: {
      control: 'boolean'
    }
  }
};

export default meta;
type Story = StoryObj<typeof RadioSlider>;

export const Default: Story = {
  args: {
    color: '#B2B9A9',
    activeColor: '#ABD27A',
    size: 'medium',
    isOn: false
  }
};

const CheckboxWithState = () => {
  const [checked, setChecked] = useState(false);

  return (
    <RadioSlider
      isOn={checked}
      onChange={() => setChecked(!checked)}
      color='#B2B9A9'
      activeColor='#ABD27A'
      size='medium'
    />
  );
};

export const InteractiveExample: Story = {
  render: () => <CheckboxWithState />
};
