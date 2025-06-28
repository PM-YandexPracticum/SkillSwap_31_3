import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxList } from './CheckboxList';
import { useState } from 'react';
import { CheckboxOption } from './CheckboxOption';
import React from 'react';

const meta: Meta<typeof CheckboxList> = {
  component: CheckboxList
};

export default meta;
type Story = StoryObj<typeof CheckboxList>;

const CheckboxListWithState = () => {
  const optionsSkills = [
    { title: 'Бизнес и карьера', value: 'Бизнес и карьера', className: '' },
    {
      title: 'Творчество и искусство',
      value: 'Творчество и искусство',
      className: ''
    },
    { title: 'Иностранные языки', value: 'Иностранные языки', className: '' },
    {
      title: 'Образование и развитие',
      value: 'Образование и развитие',
      className: ''
    },
    {
      title: 'Здоровье и лайфстайл',
      value: 'Здоровье и лайфстайл',
      className: ''
    },
    { title: 'Дом и уют', value: 'Дом и уют', className: '' }
  ];

  const [selectedSkills, setSelectedSkills] = useState(optionsSkills[0]);

  const optionsCities = [
    { title: 'Москва', value: 'Москва', className: '' },
    { title: 'Санкт-Петербург', value: 'Санкт-Петербург', className: '' },
    { title: 'Новосибирск', value: 'Новосибирск', className: '' },
    { title: 'Екатеринбург', value: 'Екатеринбург', className: '' },
    { title: 'Казань', value: 'Казань', className: '' }
  ];
  const [selectedCities, setSelectedCities] = useState(optionsCities[0]);

  return (
    <>
      <CheckboxList
        selected={selectedSkills}
        name='checkboxList_skills'
        onChange={setSelectedSkills}
        options={optionsSkills}
        title='Навыки'
        footerText='Все категории'
      />
      <CheckboxList
        selected={selectedCities}
        name='checkboxList_cities'
        onChange={setSelectedCities}
        options={optionsCities}
        title='Город'
        footerText='Все города'
      />
    </>
  );
};

export const CheckboxListStory: Story = {
  render: () => <CheckboxListWithState />
};
