import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxList } from './CheckboxList';
import { useState } from 'react';
import React from 'react';

const meta: Meta = {
  title: 'components/CheckboxList',
  component: CheckboxList,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof CheckboxList>;

const CheckboxListWithState = () => {
  const optionsSkills = [
    { value: 'Бизнес и карьера' },
    { value: 'Творчество и искусство' },
    { value: 'Иностранные языки' },
    { value: 'Образование и развитие' },
    { value: 'Здоровье и лайфстайл' },
    { value: 'Дом и уют' }
  ];

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

  const handleChangeSkills = (value: string) => {
    setSelectedSkills((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const optionsCities = [
    { value: 'Москва' },
    { value: 'Санкт-Петербург' },
    { value: 'Новосибирск' },
    { value: 'Екатеринбург' },
    { value: 'Казань' }
  ];
  const [selectedCities, setSelectedCities] = useState<string[]>([]);

  const handleChangeCities = (value: string) => {
    setSelectedSkills((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <>
      <CheckboxList
        selected={selectedSkills}
        name='checkboxList_skills'
        onChange={handleChangeSkills}
        options={optionsSkills}
        title='Навыки'
      />
      <CheckboxList
        selected={selectedCities}
        name='checkboxList_cities'
        onChange={handleChangeCities}
        options={optionsCities}
        title='Город'
      />
    </>
  );
};

export const CheckboxListStory: Story = {
  render: () => <CheckboxListWithState />
};
