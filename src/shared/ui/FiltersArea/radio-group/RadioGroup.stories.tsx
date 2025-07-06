import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { RadioGroup } from './RadioGroup';
import { useState } from 'react';

const meta: Meta = {
  title: 'components/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const RadioGroupWithState = () => {
  const options = [
    { value: 'Всё' },
    { value: 'Хочу научиться' },
    { value: 'Могу научить' }
  ];

  const [selected, setSelected] = useState('Всё');

  const optionsSex = [
    { value: 'Не имеет значения' },
    { value: 'Мужской' },
    { value: 'Женский' }
  ];
  const [selectedSex, setSelectedSex] = useState('Не имеет значения');

  return (
    <>
      <RadioGroup
        selected={selected}
        name='radio-group_all'
        onChange={setSelected}
        options={options}
        title=''
      />
      <RadioGroup
        selected={selectedSex}
        name='radio-group_sex'
        onChange={setSelectedSex}
        options={optionsSex}
        title='Пол автора'
      />
    </>
  );
};

export const RadioGroupStory: Story = {
  render: () => <RadioGroupWithState />
};
